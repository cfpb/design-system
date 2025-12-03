export class SearchService {
  constructor(items = [], options = {}) {
    this.items = items;

    // Specify object keys to search in.
    this.fields = options.fields || null;
  }

  setItems(items) {
    this.items = items;
  }

  search(query) {
    if (!query || query.trim() === '') return this.items;

    const lowerQuery = query.toLowerCase();

    const result = this.items.filter((item) => {
      if (typeof item === 'string') {
        return item.toLocaleLowerCase().includes(lowerQuery);
      }

      if (typeof item === 'object' && this.fields) {
        return this.fields.some((field) => {
          const value = item[field];
          return (
            typeof value === 'string' &&
            value.toLowerCase().includes(lowerQuery)
          );
        });
      }

      // Fallback: check all string values.
      const fallback = Object.values(item).some((value) => {
        const match =
          typeof value === 'string'
            ? value.toLowerCase().includes(lowerQuery)
            : false;
        return match;
      });
      return fallback;
    });

    return result;
  }
}
