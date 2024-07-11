import { composeValues } from './composeValues';

describe('composeValues', () => {
  test('width max price', () => {
    expect(composeValues('1500', '', 'price')).toBe('from $1500');
  });

  test('width min price', () => {
    expect(composeValues('', '1500', 'price')).toBe('to $1500');
  });

  test('width min and max price', () => {
    expect(composeValues('2000', '1500', 'price')).toBe('$2000 - 1500');
  });

  test('width to year', () => {
    expect(composeValues('1500', '', 'year')).toBe('year from 1500');
  });

  test('width from year', () => {
    expect(composeValues('', '1500', 'year')).toBe('year to 1500');
  });

  test('width from  and to year', () => {
    expect(composeValues('2000', '1500', 'year')).toBe('year: 2000 - 1500');
  });
});
