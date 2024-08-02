import { expect, test } from 'vitest'
import classJoin from './classJoin'

test('classJoin', () => {
    expect(classJoin(['class1', 'class2', 'class3'])).toBe('class1 class2 class3')
    expect(classJoin(['class1', undefined, 'class3'])).toBe('class1 class3')
    expect(classJoin(['class1', false, 'class3'])).toBe('class1 class3')
    expect(classJoin(['class1', undefined, false])).toBe('class1')
    expect(classJoin([undefined, false])).toBe('')
    expect(classJoin([])).toBe('')
    expect(classJoin(['', 'class2', 'class3'])).toBe('class2 class3')
})
