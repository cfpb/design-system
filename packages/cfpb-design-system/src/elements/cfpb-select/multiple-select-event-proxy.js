export class MultipleSelectEventProxy {
  constructor({ list, input, tagGroup, flyout }) {
    this.list = list;
    this.input = input;
    this.tagGroup = tagGroup;
    this.flyout = flyout;
  }

  onFocus() {
    this.input.focus();
  }

  onClick(evt, host) {
    const target = evt.currentTarget;

    if (target.tagName === 'CFPB-FORM-SEARCH-INPUT') {
      host.isExpanded ? this.flyout()?.suspend() : this.flyout()?.expand();
    } else {
      this.flyout()?.resume();
    }
  }

  onItemClick(evt, host) {
    host.optionList = this.list.childData ?? [];
    evt.currentTarget.focusItemAt(evt.detail.index);
  }

  async onTagClick(evt, host, tagGroup) {
    const remaining =
      this.tagGroup.tagList.filter((tag) => tag !== evt.detail.target) ?? [];

    host.optionList = host.optionList.map((item) => ({
      ...item,
      checked: remaining.some((tag) => tag.value === item.value),
    }));

    // Wait for tagGroup items to refresh.
    await host.updateComplete;

    tagGroup.focus();
  }

  onKeyDown(evt, host) {
    const focused = host.shadowRoot.activeElement.tagName;

    if (focused === 'CFPB-FORM-SEARCH-INPUT') {
      switch (evt.key) {
        case 'Tab':
          if (evt.shiftKey) {
            if (host.isExpanded) {
              evt.preventDefault();
              host.isExpanded = false;
              this.input.focus();
            } else if (this.tagGroup.tagList.length > 0) {
              evt.preventDefault();
              this.tagGroup.focus();
            }
          }
          break;
        case 'ArrowDown':
          evt.preventDefault();
          if (!host.isExpanded) host.isExpanded = true;
          else this.list.focusItemAt(0);
          break;
        case 'Enter':
          evt.preventDefault();
          host.isExpanded = !host.isExpanded;
          break;
      }
    } else if (focused === 'CFPB-LIST') {
      switch (evt.key) {
        case 'Tab':
          evt.preventDefault();
          if (this.list.visibleItems.length > 0) {
            if (!host.isExpanded) host.isExpanded = true;
            this.list.focusItemAt(0);
          } else {
            this.input.focus();
          }
          break;
      }
    } else if (focused === 'CFPB-LIST-ITEM') {
      switch (evt.key) {
        case 'Tab':
          if (evt.shiftKey) {
            if (this.list.focusedIndex === 0) {
              evt.preventDefault();
              this.list.focusItemAt(-1);
              this.input.focus();
            }
          }
          break;
      }
    }

    if (evt.key === 'Escape') {
      evt.preventDefault();
      host.isExpanded = false;
    }
  }
}
