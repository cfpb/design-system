export class SingleSelectEventProxy {
  constructor({ list, displayLabel, header }) {
    this.list = list;
    this.displayLabel = displayLabel;
    this.header = header;
  }

  onClick(evt, host) {
    if (evt.currentTarget.classList.contains('o-select__label')) {
      this.header.focus();
      host.isExpanded = !host.isExpanded;
    }
  }

  onItemClick(evt, host) {
    const selected = this.list.checkedItems[0]?.value ?? '';

    if (this.displayLabel) {
      this.displayLabel.textContent = selected;
    }

    host.optionList = host.optionList.map((item) => ({
      ...item,
      checked: item.value === selected,
    }));

    //host.requestUpdate();
    host.isExpanded = false;
  }

  onKeyDown(evt, host) {
    const focused = host.shadowRoot.activeElement.tagName;
    if (focused === 'BUTTON') {
      switch (evt.key) {
        case 'ArrowDown':
          evt.preventDefault();
          host.isExpanded = true;
          this.list.querySelector('cfpb-list-item')?.focus();
          break;
      }
    }
  }

  onFocus() {
    // Additional actions done on focus can be added here.
  }
}
