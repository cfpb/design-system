import { parseChildData } from './parse-child-data.js';

describe('parseChildData', () => {
  it('returns null for empty input', () => {
    expect(parseChildData(null)).toBeNull();
    expect(parseChildData(undefined)).toBeNull();
    expect(parseChildData('')).toBeNull();
  });

  it('returns the array unchanged if input is already an array', () => {
    const arr = [1, 2, 3];
    expect(parseChildData(arr)).toBe(arr);
  });

  it('parses valid JSON string into array', () => {
    const json = '[{"text":"a"},{"text":"b"}]';
    const result = parseChildData(json);
    expect(result).toEqual([{ text: 'a' }, { text: 'b' }]);
  });

  it('parses JSON-like string with single quotes when allowSingleQuotes=true', () => {
    const jsonLike = "[{'text':'a'},{'text':'b'}]";
    const result = parseChildData(jsonLike, { allowSingleQuotes: true });
    expect(result).toEqual([{ text: 'a' }, { text: 'b' }]);
  });

  it('throws error / returns null for invalid JSON', () => {
    const invalid = '[{text:a},{text:b}]';
    const result = parseChildData(invalid);
    expect(result).toBeNull();
  });

  it('returns null when parsed JSON is not an array', () => {
    const objString = '{"a":1,"b":2}';
    const result = parseChildData(objString);
    expect(result).toBeNull();
  });

  it('does not convert single quotes if allowSingleQuotes=false', () => {
    const singleQuoteStr = "[{'text':'a'}]";
    const result = parseChildData(singleQuoteStr, { allowSingleQuotes: false });
    expect(result).toBeNull();
  });

  it('trims whitespace before parsing', () => {
    const json = '   [ {"text":"x"} ]  ';
    const result = parseChildData(json);
    expect(result).toEqual([{ text: 'x' }]);
  });

  it('works with mixed content and multiple spaces', () => {
    const jsonLike = " [  { 'text' : 'x' } , { 'text':'y' } ] ";
    const result = parseChildData(jsonLike, { allowSingleQuotes: true });
    expect(result).toEqual([{ text: 'x' }, { text: 'y' }]);
  });
});
