import { describe, it, expect, vi } from 'vitest';
import { MultipleSelectEventProxy } from './multiple-select-event-proxy.js';

describe('MultipleSelectEventProxy', () => {
  it('updates host.optionList when a tag is removed', async () => {
    const tagA = { value: 'a' };
    const tagB = { value: 'b' };

    const host = {
      optionList: [
        { value: 'a', checked: true },
        { value: 'b', checked: true },
      ],
      updateComplete: Promise.resolve(),
    };

    const focus = vi.fn();

    const proxy = new MultipleSelectEventProxy(host);

    proxy.tagGroup = {
      items: [tagA, tagB],
    };

    await proxy.onTagClick(
      {
        detail: {
          target: tagA,
        },
      },
      host,
      { focus },
    );

    expect(host.optionList).toEqual([
      { value: 'a', checked: false },
      { value: 'b', checked: true },
    ]);

    expect(focus).toHaveBeenCalled();
  });

  it('syncs optionList from list.childData on item click', () => {
    const host = {
      optionList: [],
    };

    const list = {
      childData: [
        { value: 'a', checked: true },
        { value: 'b', checked: false },
      ],
    };

    const proxy = new MultipleSelectEventProxy({ list });

    proxy.list = {
      childData: [
        { value: 'a', checked: true },
        { value: 'b', checked: false },
      ],
    };

    const focusItemAt = vi.fn();

    const evt = {
      detail: {
        index: 0,
      },
      currentTarget: {
        focusItemAt,
      },
    };

    proxy.onItemClick(evt, host);

    expect(host.optionList).toEqual([
      { value: 'a', checked: true },
      { value: 'b', checked: false },
    ]);

    expect(focusItemAt).toHaveBeenCalledWith(0);
  });
});
