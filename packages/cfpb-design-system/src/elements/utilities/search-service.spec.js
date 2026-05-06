import { SearchService } from './search-service.js';

describe('SearchService', () => {
  //
  // ---------------------------------------------------------------------------
  // BASIC STRING SEARCH TESTS
  // ---------------------------------------------------------------------------
  //
  describe('basic behavior', () => {
    let service;
    let items;

    beforeEach(() => {
      items = ['Pawpaw', 'Elderberry', 'Persimmon'];
      service = new SearchService(items);
    });

    it('returns all items when query is empty', () => {
      const result = service.search('');
      expect(result).toEqual(items);
    });

    it('is case-insensitive', () => {
      const result = service.search('elderberry');
      expect(result).toEqual(['Elderberry']);
    });

    it('matches partial substrings', () => {
      const result = service.search('aw');
      expect(result).toEqual(['Pawpaw']);
    });

    it('returns empty array if no matches', () => {
      const result = service.search('xyz');
      expect(result).toEqual([]);
    });

    it('updates the internal list with setItems()', () => {
      const newItems = ['Possum', 'Moose'];
      service.setItems(newItems);
      const result = service.search('moose');
      expect(result).toEqual(['Moose']);
    });
  });

  //
  // ---------------------------------------------------------------------------
  // OBJECT-BASED SEARCH TESTS
  // ---------------------------------------------------------------------------
  //
  describe('object-based search', () => {
    let service;
    let items;

    beforeEach(() => {
      items = [
        {
          name: 'Pawpaw',
          description: 'Largest fruit native to North America',
        },
        { name: 'Elderberry', description: 'Must be cooked before eaten.' },
        { name: 'Persimmon', description: 'Trees are dioecious.' },
      ];
    });

    it('searches specific fields when provided', () => {
      service = new SearchService(items, { fields: ['name'] });
      const result = service.search('pawpaw');
      expect(result).toEqual([
        {
          name: 'Pawpaw',
          description: 'Largest fruit native to North America',
        },
      ]);
    });

    it('searches across multiple fields', () => {
      service = new SearchService(items, { fields: ['name', 'description'] });
      const result = service.search('America');
      expect(result).toEqual([
        {
          name: 'Pawpaw',
          description: 'Largest fruit native to North America',
        },
      ]);
    });

    it('searches all string values if no fields specified', () => {
      service = new SearchService(items);
      const result = service.search('dioecious');
      expect(result).toEqual([
        { name: 'Persimmon', description: 'Trees are dioecious.' },
      ]);
    });

    it('ignores non-string fields', () => {
      const complexItems = [
        { name: 'Grape', count: 5 },
        { name: 'Mango', count: 10 },
      ];

      service = new SearchService(complexItems);
      const result = service.search('10');

      // Numbers are ignored.
      expect(result).toEqual([]);
    });
  });

  //
  // ---------------------------------------------------------------------------
  // EDGE CASES & ROBUSTNESS
  // ---------------------------------------------------------------------------
  //
  describe('edge cases', () => {
    let service;
    beforeEach(() => {
      service = new SearchService();
    });

    it('handles null or undefined queries gracefully', () => {
      service.setItems(['Bottle cap']);
      expect(service.search(null)).toEqual(['Bottle cap']);
      expect(service.search(undefined)).toEqual(['Bottle cap']);
    });

    it('returns an empty array when items is empty', () => {
      const result = service.search('bottle');
      expect(result).toEqual([]);
    });

    it('ignores objects without string properties', () => {
      service.setItems([{ id: 1 }, { id: 2 }]);
      const result = service.search('1');
      expect(result).toEqual([]);
    });
  });
});
