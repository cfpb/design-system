import { propertyFormatNames } from 'style-dictionary/enums';
import { fileHeader, formattedVariables } from 'style-dictionary/utils';

// Keep comma-separated CSS value lists compact (e.g. rgba channels, font stacks).
const normalizeCommaSpacing = (value) =>
  value.replace(/(:[^;\n]*)(;)/g, (match, valuePart, semi) =>
    valuePart.includes(',')
      ? `${valuePart.replace(/\s*,\s*/g, ',')}${semi}`
      : match,
  );

export const createCssVariablesNoSpaceCommasFormat = ({
  getAliasInfo,
  toKebab,
  warn,
}) =>
  async ({ dictionary, options = {}, file }) => {
    // Support single selector string or nested selector arrays.
    const selector = Array.isArray(options.selector)
      ? options.selector
      : options.selector
        ? [options.selector]
        : [':root'];

    const {
      outputReferences,
      outputReferenceFallbacks,
      usesDtcg,
      formatting,
      sort,
    } = options;

    const header = await fileHeader({
      file,
      formatting: formatting ? { ...formatting, prefix: undefined } : formatting,
      options,
    });

    const indentation = formatting?.indentation || '  ';
    const nestInSelector = (content, currentSelector, indent) =>
      `${indent}${currentSelector} {\n${content}\n${indent}}`;

    const aliasInfoByName = new Map();
    if (outputReferences && usesDtcg) {
      for (const token of dictionary.allTokens) {
        const aliasInfo = getAliasInfo(token);
        if (!aliasInfo?.name) continue;

        const aliasKey = toKebab(aliasInfo.name);
        const record = aliasInfoByName.get(aliasKey) || {
          count: 0,
          setNames: new Set(),
          missingSetName: false,
        };

        record.count += 1;
        if (aliasInfo.setName) record.setNames.add(toKebab(aliasInfo.setName));
        else record.missingSetName = true;
        aliasInfoByName.set(aliasKey, record);
      }
    }

    const warnedAliases = new Set();

    // When outputReferences is enabled with DTCG tokens, use Figma alias data to
    // resolve target CSS var names and detect ambiguous alias collisions early.
    const dictionaryForAliases =
      outputReferences && usesDtcg
        ? {
            ...dictionary,
            allTokens: dictionary.allTokens.map((token) => {
              const aliasInfo = getAliasInfo(token);
              if (!aliasInfo) return token;

              const aliasKey = toKebab(aliasInfo.name);
              const record = aliasInfoByName.get(aliasKey);
              const hasCollision = record && record.count > 1;

              if (hasCollision && record.missingSetName) {
                throw new Error(
                  `Alias name collision for "${aliasInfo.name}" without targetVariableSetName. ` +
                    `Cannot disambiguate in ${token.filePath || 'unknown file'}.`,
                );
              }

              if (
                hasCollision &&
                record.setNames.size > 1 &&
                !warnedAliases.has(aliasKey)
              ) {
                warn(
                  options,
                  `Alias name collision for "${aliasInfo.name}". ` +
                    'Multiple collections share the same alias name.',
                );
                warnedAliases.add(aliasKey);
              }

              const aliasVar = `var(--${aliasKey})`;
              return {
                ...token,
                value: aliasVar,
                $value: aliasVar,
                original: {
                  ...token.original,
                  value: aliasVar,
                  $value: aliasVar,
                },
              };
            }),
          }
        : dictionary;

    const variablesNoCommaSpaces = normalizeCommaSpacing(
      formattedVariables({
        format: propertyFormatNames.css,
        dictionary: dictionaryForAliases,
        outputReferences,
        outputReferenceFallbacks,
        formatting: {
          ...formatting,
          indentation: indentation.repeat(selector.length),
        },
        usesDtcg,
        sort,
      }),
    );

    return (
      // Wrap the variable block inside selectors from inside-out so callers can
      // pass nested selectors (e.g. [':root', '.theme-a']).
      header +
      selector
        .reverse()
        .reduce(
          (content, currentSelector, index) =>
            nestInSelector(
              content,
              currentSelector,
              indentation.repeat(selector.length - 1 - index),
            ),
          variablesNoCommaSpaces,
        ) +
      '\n'
    );
  };
