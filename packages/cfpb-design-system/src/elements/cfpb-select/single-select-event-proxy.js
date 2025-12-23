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

    if (this.displayLabel.value) {
      this.displayLabel.value.textContent = selected;
    }

    host.optionList = host.optionList.map((item) => ({
      ...item,
      checked: item.value === selected,
    }));

    //host.requestUpdate();
    host.isExpanded = false;
  }

  onKeyDown(evt) {
    switch (evt.key) {
      case 'ArrowDown':
        evt.preventDefault();
        this.list.querySelector('cfpb-list-item')?.focus();
        break;
    }
  }

  onFocus() {
    // Additional actions done on focus can be added here.
  }
}
