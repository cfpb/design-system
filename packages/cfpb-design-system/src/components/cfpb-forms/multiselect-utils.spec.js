import { beforeAll } from '@jest/globals';
import { create } from './multiselect-utils.js';

describe('create', () => {
  beforeAll(() => {
    const heading = create('h1', null, {
      textContent: 'Create Heading Text',
      id: 'create-heading-id',
      className: 'create-heading-class',
      'data-name': 'create-heading-data',
    });

    create('span', heading, {
      textContent: 'Heading Span',
      id: 'create-span-id',
      className: 'create-span-class',
      'data-name': 'create-span-data',
    });

    document.body.appendChild(heading);
  });

  it('should create a single elem', () => {
    const query = document.querySelector('h1');

    expect(query.id).toBe('create-heading-id');
    expect(query.className).toBe('create-heading-class');
    expect(query.getAttribute('data-name')).toBe('create-heading-data');
  });

  it('should create an elem inside another', () => {
    const query = document.querySelector('span');

    expect(query.textContent).toBe('Heading Span');
    expect(query.id).toBe('create-span-id');
    expect(query.className).toBe('create-span-class');
    expect(query.getAttribute('data-name')).toBe('create-span-data');
  });
});
