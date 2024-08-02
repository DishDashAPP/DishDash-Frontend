import { expect, test } from 'vitest'
import { toFarsiNumber } from './toFarsiNumber'

test('toFarsiNumber', () => {
    // Test converting English digits to Persian digits
    expect(toFarsiNumber(1234567890)).toBe('۱۲۳۴۵۶۷۸۹۰')
    expect(toFarsiNumber(0)).toBe('۰')
    expect(toFarsiNumber(5)).toBe('۵')

    // Test input with a single digit
    expect(toFarsiNumber(7)).toBe('۷')

    // Test edge cases with `undefined`
    expect(toFarsiNumber(undefined)).toBe('')

    // Test input with multiple digits
    expect(toFarsiNumber(9876543210)).toBe('۹۸۷۶۵۴۳۲۱۰')

    // Test large number
    expect(toFarsiNumber(1234567890123456)).toBe('۱۲۳۴۵۶۷۸۹۰۱۲۳۴۵۶')
})
