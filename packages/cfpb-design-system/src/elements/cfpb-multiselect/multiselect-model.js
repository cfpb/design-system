/**
 *
 * @element cfpb-multiselect.
 * @slot - The main content for the upload button.
 */
export class MultiselectModel extends EventTarget {
  // Declare private properties.
  #options;
  #name;
  #max;
  #optionsData;
  #selectedIndices;
  #filterIndicesList;
  #lastFilterIndicesList;
  #index;

  // Undefined return value for void methods.
  #UNDEFINED;

  /**
   * @class
   * MultiselectModel
   * @param {HTMLOptionsCollection} options
   *   Set of options from a <select> element.
   * @param {string} name - a unique name for this multiselect.
   * @param {object} config - Customization of Multiselect behavior
   */
  constructor(options, name, config) {
    super();

    this.#options = options;
    this.#name = name;
    this.#max = config?.maxSelections || MultiselectModel.MAX_SELECTIONS;
    this.#optionsData = [];

    this.#selectedIndices = [];
    this.#filterIndicesList = [];

    /* When the options list is filtered, we store a list of filtered indices
    so that when the filter changes we can reset the last matched options. */
    this.#lastFilterIndicesList = [];

    // Which option is in focus. -1 means the focus is on the search input.
    this.#index = -1;
  }

  /**
   * @param {HTMLElement} item - An option HTML node.
   * @returns {string} A (hopefully) unique ID.
   *   If it's not unique, we have a duplicate option value.
   */
  #getOptionId(item) {
    return (
      this.#name + '-' + item.value.trim().replace(/\s+/g, '-').toLowerCase()
    );
  }

  /**
   * @returns {boolean}
   *   True if the maximum number of options are checked, false otherwise.
   */
  isAtMaxSelections() {
    return this.#selectedIndices.length >= this.#max;
  }

  /**
   * Cleans up a list of options for saving to memory.
   * @param {HTMLOptionsCollection} list - The options from a select element.
   * @returns {Array} An array of option objects.
   */
  #formatOptions(list) {
    let item;
    const cleaned = [];

    let isChecked = false;
    let isSelected = false;
    for (let i = 0, len = list.length; i < len; i++) {
      item = list[i];
      isSelected = item.defaultSelected ? item.defaultSelected : false;
      isChecked = this.isAtMaxSelections() ? false : isSelected;
      cleaned.push({
        id: this.#getOptionId(item),
        value: item.value,
        label: item.text,
        text: item.text,
        checked: isChecked,
        index: i,
      });

      // If an option is initially checked, we need to record it.
      if (isChecked) {
        this.#selectedIndices.push(i);
      }
    }

    return cleaned;
  }

  /**
   * @returns {MultiselectModel} An instance.
   */
  init() {
    this.#optionsData = this.#formatOptions(this.#options);

    return this;
  }

  /**
   * Toggle checked value of an option.
   * @param {number} index - The index position of the option in the list.
   * @returns {boolean} A value of true is checked and false is unchecked.
   */
  toggleOption(index) {
    const isChecked = !this.#optionsData[index].checked;

    if (isChecked && this.#selectedIndices.length < this.#max) {
      this.#optionsData[index].checked = true;
      this.#selectedIndices.push(index);
      this.#selectedIndices.sort();

      return true;
    }

    // We're over the max selections, reverse the check of the option.
    this.#optionsData[index].checked = false;
    this.#selectedIndices = this.#selectedIndices.filter(function (currIndex) {
      return currIndex !== index;
    });

    return false;
  }

  /**
   * Utility function for Array.reduce() used in searchIndices.
   * @param {Array} aggregate - The reducer's accumulator.
   * @param {object} item - Each item in the collection.
   * @param {number} index - The index of item in the collection.
   * @param {string} value - The value of item in the collection.
   * @returns {Array} The reducer's accumulator.
   */
  #searchAggregator(aggregate, item, index, value) {
    if (MultiselectModel.stringMatch(item.text, value)) {
      aggregate.push(index);
    }
    return aggregate;
  }

  /**
   * Search for a query string in the options text and return the indices of
   * the matching positions in the options array.
   * @param {string} query - A query string.
   * @returns {Array} List of indices of the matching entries from the options.
   */
  filterIndices(query) {
    // Convert query to a string if it's not.
    if (Object.prototype.toString.call(query) !== '[object String]') {
      query = '';
    }

    this.#lastFilterIndicesList = this.#filterIndicesList;

    if (this.#optionsData.length > 0) {
      this.#filterIndicesList = this.#optionsData.reduce((acc, item, index) => {
        return this.#searchAggregator(acc, item, index, query);
      }, []);
    }

    // Reset index position.
    this.#index = -1;

    return this.#filterIndicesList;
  }

  // This is used to search the items in the collection.
  clearFilter() {
    this.#filterIndicesList = this.#lastFilterIndicesList = [];
    return this.#UNDEFINED;
  }

  get filterIndicesList() {
    return this.#filterIndicesList;
  }

  get lastFilterIndicesList() {
    return this.#lastFilterIndicesList;
  }

  // This is used to check an item in the collection.
  get selectedIndices() {
    return this.#selectedIndices;
  }

  /**
   * Retrieve an option object from the options list.
   * @param {number} index - The index position in the options list.
   * @returns {object} The option object with text, value, and checked value.
   */
  getOption(index) {
    return this.#optionsData[index];
  }

  /**
   * Set the index of the collection (represents the highlighted option).
   * @param {number} value - The index to set.
   */
  set index(value) {
    const filterCount = this.#filterIndicesList.length;
    const count = filterCount === 0 ? this.#optionsData.length : filterCount;
    if (value < 0) {
      this.#index = -1;
    } else if (value >= count) {
      this.#index = count - 1;
    } else {
      this.#index = value;
    }
  }

  /**
   * @returns {number} The current index (highlighted option).
   */
  get index() {
    return this.#index;
  }

  resetIndex() {
    this.#index = -1;
    return this.#index;
  }

  get options() {
    return this.#optionsData;
  }

  // These are used to highlight items in the collection.

  /*

  get items() {
    console.log([...this.#items]);
    return [...this.#items];
  }

  set items(newItems) {
    this.#items = newItems;
    this.#notify();
  }

  addItem(item) {
    this.#items.push(item);
    this.#notify();
  }

  removeItem(indexToRemove) {
    this.#items.splice(indexToRemove, 1);
  }

  #notify() {
    this.dispatchEvent(new Event('change'));
  }

  subscribe(callback) {
    this.addEventListener('change', callback);
    return () => this.removeEventListener('change', callback);
  }
  */

  // How many options may be checked.
  static MAX_SELECTIONS = 5;

  /**
   * Escapes a string.
   * @param {string} str - The string to escape.
   * @returns {string} The escaped string.
   */
  static stringEscape(str) {
    return str.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
  }

  /**
   * Tests whether a string matches another.
   * @param   {string}  x - The control string.
   * @param   {string}  y - The comparison string.
   * @returns {boolean}   True if `x` and `y` match, false otherwise.
   */
  static stringMatch(x, y) {
    return RegExp(MultiselectModel.stringEscape(y.trim()), 'i').test(x);
  }
}
