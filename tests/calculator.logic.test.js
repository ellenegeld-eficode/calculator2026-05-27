const { calculateExpression } = require('../calculator-logic');

describe('calculateExpression', () => {
    it('returns a sum for simple addition', () => {
        expect(calculateExpression('1+2')).toBe('3');
    });

    it('respects operator precedence', () => {
        expect(calculateExpression('1+2*3')).toBe('7');
    });

    it('supports modulo', () => {
        expect(calculateExpression('10%3')).toBe('1');
    });

    it('returns Infinity for divide by zero', () => {
        expect(calculateExpression('5/0')).toBe('Infinity');
    });

    it('returns Error for invalid expressions', () => {
        expect(calculateExpression('5/')).toBe('Error');
    });

    it('returns Error for empty expressions', () => {
        expect(calculateExpression('')).toBe('Error');
    });
});