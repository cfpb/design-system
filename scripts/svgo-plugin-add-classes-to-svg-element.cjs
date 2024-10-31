'use strict';

const path = require('path');

exports.name = 'addClassesToSVGElement';
exports.description = 'adds classnames to an outer <svg> element';

const ENOCLS = `Error in plugin "addClassesToSVGElement": absent parameters.
It should have a list of classes in "classNames" or one "className".
Config example:
plugins: [
  {
    name: "addClassesToSVGElement",
    params: {
      className: "mySvg"
    }
  }
]
plugins: [
  {
    name: "addClassesToSVGElement",
    params: {
      classNames: ["mySvg", "size-big"]
    }
  }
]
Optionally, the "suffixPattern" can be added to include a duplicate of each
class name with an added suffix string. The magic keyword "$FILENAME" can
be added to include the filename as part of the suffix string. For example:
plugins: [
  {
    name: "addClassesToSVGElement",
    params: {
      classNames: ["mySvg"],
      suffixPattern: "__$FILENAME"
    }
  }
]
`;

/**
 * Add classnames to an outer <svg> element. Example config:
 *
 * plugins: [
 * {
 * name: "addClassesToSVGElement",
 * params: {
 * className: "mySvg"
 * }
 * }
 * ]
 *
 * plugins: [
 * {
 * name: "addClassesToSVGElement",
 * params: {
 * classNames: ["mySvg", "size-big"]
 * }
 * }
 * ]
 *
 * Use the suffixPattern parameter to add an arbitrary suffix to
 * the class names.
 *
 * plugins: [
 * {
 * name: "addClassesToSVGElement",
 * params: {
 * classNames: ["mySvg"],
 * suffixPattern: "__$FILENAME"
 * }
 * }
 * ]
 *
 * Use the boolean doesPreserveClasses parameter to preserve any
 * existing classes on the SVG element, otherwise any existing
 * classes will be removed.
 *
 * plugins: [
 * {
 * name: "addClassesToSVGElement",
 * params: {
 * classNames: ["mySvg"],
 * doesPreserveClasses: true
 * }
 * }
 * ]
 * @author April Arcus, Anselm Bradford
 * @type {import('./plugins-types').Plugin<'addClassesToSVGElement'>}
 */
exports.fn = (root, params, info) => {
  if (
    !(Array.isArray(params.classNames) && params.classNames.some(String)) &&
    !params.className
  ) {
    console.error(ENOCLS);
    return null;
  }
  const classNames = params.classNames || [params.className];

  /**
   * If we have a suffix pattern,
   * duplicate the existing class names and add a copy with the suffix.
   * If the suffix pattern contains the magic keyword '$FILENAME',
   * it is replaced with the actual filename. For example,
   * if the className param is 'mySvg' and the suffixPattern
   * param is '__$FILENAME`, then for 'cat.svg`, the final classes
   * will be 'mySvg mySvg__cat'. For 'dog.svg', the final classes
   * will be 'mySvg mSvg__dog'.
   */
  if (typeof params.suffixPattern !== 'undefined') {
    let suffixPattern = params.suffixPattern;
    const filename = path.basename(info.path, '.svg');
    suffixPattern = suffixPattern.replace('$FILENAME', filename);
    for (let i = 0, len = classNames.length; i < len; i++) {
      classNames.push(classNames[i] + suffixPattern);
    }
  }

  return {
    element: {
      enter: (node, parentNode) => {
        if (node.name === 'svg' && parentNode.type === 'root') {
          params.doesPreserveClasses ? null : (node.attributes.class = null);
          const classList = new Set(
            node.attributes.class == null
              ? null
              : node.attributes.class.split(' ')
          );
          for (const className of classNames) {
            if (className != null) {
              classList.add(className);
            }
          }
          node.attributes.class = Array.from(classList).join(' ');
        }
      },
    },
  };
};
