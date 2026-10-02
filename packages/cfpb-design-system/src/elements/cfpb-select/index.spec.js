import { CfpbSelect } from './index';

beforeAll(() => {
  CfpbSelect.init();
});

describe('<cfpb-select> tests', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('keeps only the last selected option when switching to single mode', async () => {
    const select = document.createElement('cfpb-select');

    select.multiple = true;
    select.optionList = [
      { value: 'Alpha', checked: true },
      { value: 'Bravo', checked: true },
      { value: 'Charlie', checked: false },
    ];

    document.body.appendChild(select);
    await select.updateComplete;

    select.multiple = false;
    await select.updateComplete;

    const checkedValues = select.optionList
      .filter((item) => item.checked)
      .map((item) => item.value);

    expect(checkedValues).toEqual(['Bravo']);
    expect(select.shadowRoot.querySelector('.o-select__label').textContent).toBe(
      'Bravo',
    );
  });
});
