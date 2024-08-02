import { expect, test } from 'vitest'
import { numberWithCommas, priceWithCommas } from './maskPrice'

test('numberWithCommas', () => {
    expect(numberWithCommas(1000)).toBe('1,000')
    expect(numberWithCommas(1000000)).toBe('1,000,000')
    expect(numberWithCommas('1000')).toBe('1,000')
    expect(numberWithCommas('1000000')).toBe('1,000,000')
    expect(numberWithCommas(123456789)).toBe('123,456,789')
    expect(numberWithCommas('123456789')).toBe('123,456,789')
})

test('priceWithCommas', () => {
    expect(priceWithCommas(1000)).toBe('1,000')
    expect(priceWithCommas(1000000)).toBe('1,000,000')
    expect(priceWithCommas('1000')).toBe('1,000')
    expect(priceWithCommas('1000000')).toBe('1,000,000')
    expect(priceWithCommas(123456789)).toBe('123,456,789')
    expect(priceWithCommas('123456789')).toBe('123,456,789')
    expect(priceWithCommas(10000, true)).toBe('1,000')
    expect(priceWithCommas('10000', true)).toBe('1,000')
    expect(priceWithCommas(undefined)).toBe('0')
    expect(priceWithCommas(undefined, true)).toBe('0')
})
