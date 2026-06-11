import { describe, expect, it } from 'vitest';
import { priceFormat } from './priceFormat';

describe('priceFormat', () => {
    it('format EUR prices', () => {
        expect(priceFormat(10, 'EUR')).toBe('€10.00')
    });

    it('format USD prices', () => {
        expect(priceFormat(25.5, 'USD')).toBe('$25.50')
    });

    it('format EUR prices', () => {
        expect(priceFormat(1000, 'Points')).toBe('1,000 pts')
    });

    it('returns the value for unknown currencies', () => {
        expect(priceFormat(10, 'GBP')).toBe('10')
    });
})