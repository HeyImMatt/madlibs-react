const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test('it returns a string', () => {
    expect(typeof addCommas(1)).toBe('string')
  })

  test('it does not add commas to numbers less than 3 digits', ()=> {
    expect(addCommas(123)).toBe('123')
    expect(addCommas(123.45)).toBe('123.45')
  })

  test('it adds commas to numbers over 4 digits', () => {
    expect(addCommas(1234)).toBe('1,234');
    expect(addCommas(123456789)).toBe('123,456,789')
  })

  test('it adds commas to negative numbers', () => {
    expect(addCommas(-1234)).toBe('-1,234');
  })

  test('it keeps decimals intact', () => {
    expect(addCommas(-1234.45)).toBe('-1,234.45');
  })

  test('it returns NaN for invalid inputs', () => {
    expect(addCommas('1AB23')).toBe(NaN);
    expect(addCommas('')).toBe(NaN);
    expect(addCommas([])).toBe(NaN);
  })

});
