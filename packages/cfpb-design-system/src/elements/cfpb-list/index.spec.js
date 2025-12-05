import { jest } from '@jest/globals';
import { CfpbList } from './index';

beforeAll(() => {
  CfpbList.init();
});

describe('<cfpb-list> tests', () => {
  let list;

  beforeEach(() => {
    list = document.createElement('cfpb-list');
    document.body.appendChild(list);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('renders childData and sets checked state (single)', async () => {
    list.childData = JSON.stringify([
      { value: 'A', checked: true },
      { value: 'B', checked: true },
      { value: 'C' },
    ]);

    await list.updateComplete;

    expect(list.items.length).toBe(3);
    // Only first checked stays true in single select
    expect(list.items[0].checked).toBe(true);
    expect(list.items[1].checked).toBe(false);
    expect(list.items[2].checked).toBe(false);
    expect(list.checkedItems).toEqual([list.items[0]]);
  });

  test('multiple selection mode allows multiple checked items', async () => {
    list.multiple = true;
    list.childData = JSON.stringify([
      { value: 'A', checked: true },
      { value: 'B', checked: true },
      { value: 'C' },
    ]);

    await list.updateComplete;

    expect(list.checkedItems.length).toBe(2);
    expect(list.checkedItems).toContain(list.items[0]);
    expect(list.checkedItems).toContain(list.items[1]);

    // Uncheck an item
    const event = new CustomEvent('click-item', {
      bubbles: true,
      composed: true,
    });
    list.items[0].checked = false;
    list.items[0].dispatchEvent(event);

    expect(list.checkedItems).toEqual([list.items[1]]);
  });

  test('click-item toggles single selection', async () => {
    list.childData = JSON.stringify([{ value: 'A' }, { value: 'B' }]);

    await list.updateComplete;

    const clickSpy = jest.fn();
    list.addEventListener('item-click', clickSpy);

    // Click first item
    list.items[0].checked = true;
    list.items[0].dispatchEvent(
      new CustomEvent('click-item', { bubbles: true, composed: true }),
    );

    expect(list.checkedItems).toEqual([list.items[0]]);
    expect(clickSpy).toHaveBeenCalledTimes(1);

    // Click again to uncheck
    list.items[0].checked = false;
    list.items[0].dispatchEvent(
      new CustomEvent('click-item', { bubbles: true, composed: true }),
    );
    expect(list.checkedItems).toEqual([]);
  });

  test('replaces prior click listeners on items', async () => {
    list.childData = JSON.stringify([{ value: 'X' }]);
    await list.updateComplete;

    const listenerSpy = jest.fn();
    list.addEventListener('item-click', listenerSpy);

    // Trigger click-item event
    const event = new CustomEvent('click-item', {
      bubbles: true,
      composed: true,
    });
    list.items[0].dispatchEvent(event);

    expect(listenerSpy).toHaveBeenCalled();
  });

  test('filterItems hides items and sets focused index', async () => {
    list.childData = JSON.stringify([
      { value: 'A' },
      { value: 'B' },
      { value: 'C' },
    ]);
    await list.updateComplete;

    list.filterItems(['B']);
    expect(list.visibleItems.length).toBe(1);
    expect(list.visibleItems[0].value).toBe('B');
    expect(list.items[0].hidden).toBe(true);
    expect(list.items[1].hidden).toBe(false);
    expect(list.items[2].hidden).toBe(true);
  });

  test('arrow keys skip hidden items', async () => {
    list.childData = JSON.stringify([
      { value: 'A' },
      { value: 'B' },
      { value: 'C' },
    ]);
    await list.updateComplete;

    list.filterItems(['C']); // only C visible

    list.focusItemAt(0);
    expect(document.activeElement.value).toBe('C');

    // Press ArrowDown, should wrap to same visible item
    list.shadowRoot
      .querySelector('div')
      .dispatchEvent(
        new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }),
      );
    expect(document.activeElement.value).toBe('C');

    // Press ArrowUp
    list.shadowRoot
      .querySelector('div')
      .dispatchEvent(
        new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true }),
      );
    expect(document.activeElement.value).toBe('C');
  });

  test('showAllItems unhides all items', async () => {
    list.childData = JSON.stringify([
      { value: 'A', hidden: true },
      { value: 'B', hidden: true },
    ]);
    await list.updateComplete;

    list.showAllItems();
    expect(list.items.every((i) => i.hidden === false)).toBe(true);
    expect(list.visibleItems.length).toBe(2);
  });

  test('invalid childData logs error', async () => {
    console.error = jest.fn();
    list.childData = 'not-json';
    await list.updateComplete;

    expect(console.error).toHaveBeenCalled();
  });
});
