import { expect, test, vi } from 'vitest'
import { formatDateTime, relativeDateTime, addSecondsToDate, subtractDates } from './date.js'
import { Times } from './constants'

const lastHourOf2023 = new Date('2023-12-31 23:00')
const firstSixthHourOf2024 = new Date('2024-01-01 06:00')

test('formatDateTime', () => {
    expect(formatDateTime(lastHourOf2023)).toBe('۱۴۰۲/۱۰/۱۰, ۲۳:۰۰')
    expect(formatDateTime(lastHourOf2023, 'fullDate')).toBe('۱۴۰۲/۱۰/۱۰')
    expect(formatDateTime(lastHourOf2023, 'fullDateTime')).toBe('۱۰ دی ۱۴۰۲، ۲۳:۰۰')
    expect(formatDateTime(lastHourOf2023, 'monthAndDay')).toBe('۱۰/۱۰')
    expect(formatDateTime(lastHourOf2023, 'time')).toBe('۲۳:۰۰')
    expect(formatDateTime(lastHourOf2023, 'fullDate', 'en-US')).toBe('12/31/2023')
    expect(formatDateTime(lastHourOf2023, { minute: 'numeric' })).toBe('۰')
})

test('relativeDateTime', () => {
    vi.setSystemTime(new Date('2020-10-11 00:00').getTime())

    expect(relativeDateTime('2020-10-11 00:00')).toBe('اکنون')
    expect(relativeDateTime('2020-10-10 00:00')).toBe('دیروز')
    expect(relativeDateTime('2020-10-12 08:15')).toBe('فردا')
    expect(relativeDateTime('2021-12-24 19:29')).toBe('سال آینده')
    expect(relativeDateTime('2020-11-15 03:29')).toBe('ماه آینده')
    expect(relativeDateTime('2020-10-10 23:29')).toBe('۳۱ دقیقه پیش')
    expect(relativeDateTime('2020-10-09 04:45')).toBe('پریروز')
})

test('addSecondsToDate', () => {
    expect(addSecondsToDate('2020-01-01', 1)).toMatchObject(new Date('2020-01-01T00:00:01.000Z'))
    expect(addSecondsToDate('2020-01-01', 1, 2, 3)).toMatchObject(new Date('2020-01-01T00:00:06.000Z'))
    expect(addSecondsToDate(new Date('2023-11-18 10:20'), 3600).getHours()).toBe(11)
    expect(addSecondsToDate(lastHourOf2023, 3600, 6 * 3600).toString()).toBe(firstSixthHourOf2024.toString())
})

test('subtractDates', () => {
    expect(subtractDates('2025-01-01', '2025-01-01')).toBe(0)
    expect(subtractDates('2025-01-01', '2025-01-02')).toBe(-86400)
    expect(subtractDates('2025-01-01', '2025-01-02', Times.DAY)).toBe(-1)
    expect(subtractDates('2025-08-20', '2025-01-01', Times.MONTH)).toBeGreaterThan(0)
    expect(subtractDates(firstSixthHourOf2024, lastHourOf2023, Times.HOUR)).toBe(7)
})
