import { expect, test } from 'vitest'
import { toEnglishDigits } from './toEnglishDigits'

test('toEnglishDigits', () => {
    // Test converting Persian digits to English digits
    expect(toEnglishDigits('۱۲۳۴۵۶۷۸۹۰')).toBe('1234567890')
    expect(toEnglishDigits('۰')).toBe('0')
    expect(toEnglishDigits('۵')).toBe('5')

    // Test input with mixed Persian and English digits
    expect(toEnglishDigits('۱۲3۴5۶7۸9۰')).toBe('1234567890')

    // Test input with no Persian digits
    expect(toEnglishDigits('1234567890')).toBe('1234567890')

    // Test input with non-digit characters
    expect(toEnglishDigits('۱۲3۴a۵b۶c7۸9۰')).toBe('1234a5b6c7890')

    // Test input with only non-digit characters
    expect(toEnglishDigits('abc')).toBe('abc')

    // Test input as a number
    expect(toEnglishDigits('۱۲3۴5۶7۸9۰')).toBe('1234567890')

    // Test empty string
    expect(toEnglishDigits('')).toBe('')

    // Test undefined input
    expect(toEnglishDigits(undefined)).toBe('')
})
