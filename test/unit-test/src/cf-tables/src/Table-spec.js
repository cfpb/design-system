import simulateEvent from '../../../../util/simulate-event';
const Table = require( '../../../../../packages/tables/src/Table' );

const HTML_SNIPPET = `
<table id="test-one" class="o-table o-table__sortable">
    <thead>
        <tr>
            <th>
                Agency
            </th>
            <th>
              <button class="sortable" id="lang-sort">
                Languages
              </button>
            </th>
            <th>
              <button class="sortable sorted-up"
                      id="dist-sort"
                      data-sort_type="number">
                Distance
              </button>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                Alpha
            </td>
            <td data-label="Languages">
                English
            </td>
            <td data-label="Distance">
                2.6 mi
            </td>
        </tr>
        <tr>
            <td>
                Beta
            </td>
            <td data-label="Languages">
                English, Spanish
            </td>
            <td data-label="Distance">
                1.4 mi
            </td>
        </tr>
        <tr>
            <td>
                Gamma
            </td>
            <td data-label="Languages">
                English, French, Spanish
            </td>
            <td data-label="Distance">
                1.4 mi
            </td>
        </tr>
        <tr>
            <td>
                Delta
            </td>
            <td data-label="Languages">
                English, Spanish
            </td>
            <td data-label="Distance">
                3.2 mi
            </td>
        </tr>
        <tr>
            <td>
                Epsilon
            </td>
            <td data-label="Languages">
                English
            </td>
            <td data-label="Distance">
                1.6 mi
            </td>
        </tr>
        <tr>
            <td>
              Zeta
            </td>
            <td data-label="Languages">
              English, Spanish
            </td>
            <td data-label="Distance">
              1.2 mi
            </td>
        </tr>
        <tr>
            <td>
                Eta
            </td>
            <td data-label="Languages">
                English
            </td>
            <td data-label="Distance">
                11.1 mi
            </td>
        </tr>
    </tbody>
</table>
`;

const selector1 = '#test-one tbody tr:nth-child(1)';
const selector2 = '#test-one tbody tr:nth-child(4)';
const selector3 = '#test-one tbody tr:nth-child(7)';

describe( 'Table', () => {

  beforeEach( () => {
    document.body.innerHTML = HTML_SNIPPET;
    Table.init();
  } );

  it( 'should have the .sort-up class sort table on load', () => {
    const dom1 = document.querySelector( selector1 ).querySelector(
      'td:nth-child(3)'
    );

    const dom2 = document.querySelector( selector2 ).querySelector(
      'td:nth-child(3)'
    );

    const dom3 = document.querySelector( selector3 ).querySelector(
      'td:nth-child(3)'
    );

    expect( dom1.innerHTML.trim() ).toBe( '1.2 mi' );
    expect( dom2.innerHTML.trim() ).toBe( '1.6 mi' );
    expect( dom3.innerHTML.trim() ).toBe( '11.1 mi' );
  } );

  it( 'should sort column low-to-high on click', () => {
    const langDom = document.querySelector( '#lang-sort' );
    simulateEvent( 'click', langDom );

    const dom1 = document.querySelector( selector1 ).querySelector(
      'td:nth-child(2)'
    );

    const dom2 = document.querySelector( selector2 ).querySelector(
      'td:nth-child(2)'
    );

    const dom3 = document.querySelector( selector3 ).querySelector(
      'td:nth-child(2)'
    );

    expect( dom1.innerHTML.trim() ).toBe( 'English' );
    expect( dom2.innerHTML.trim() ).toBe( 'English, French, Spanish' );
    expect( dom3.innerHTML.trim() ).toBe( 'English, Spanish' );
  } );

  it( 'should sort column high-to-low on second click', () => {
    const langDom = document.querySelector( '#lang-sort' );
    simulateEvent( 'click', langDom );
    simulateEvent( 'click', langDom );

    const dom1 = document.querySelector( selector1 ).querySelector(
      'td:nth-child(2)'
    );

    const dom2 = document.querySelector( selector2 ).querySelector(
      'td:nth-child(2)'
    );

    const dom3 = document.querySelector( selector3 ).querySelector(
      'td:nth-child(2)'
    );

    expect( dom1.innerHTML.trim() ).toBe( 'English, Spanish' );
    expect( dom2.innerHTML.trim() ).toBe( 'English, French, Spanish' );
    expect( dom3.innerHTML.trim() ).toBe( 'English' );
  } );

  xit( 'should sort column low-to-high on click for "number" sort type', () => {
    const distDom = document.querySelector( '#dist-sort' );
    simulateEvent( 'click', distDom );

    const dom1 = document.querySelector( selector1 ).querySelector(
      'td:nth-child(3)'
    );

    const dom2 = document.querySelector( selector2 ).querySelector(
      'td:nth-child(3)'
    );

    const dom3 = document.querySelector( selector3 ).querySelector(
      'td:nth-child(3)'
    );

    expect( dom1.innerHTML.trim() ).toBe( '11.1 mi' );
    expect( dom2.innerHTML.trim() ).toBe( '1.6 mi' );
    expect( dom3.innerHTML.trim() ).toBe( '1.2 mi' );
  } );

} );
