/**
 * Join class names
 * @param classNames
 * @returns String
 * @example classJoin(['class1', 'class2', 'class3'])
 */
const classJoin = (classNames: (string | undefined | false)[]) => {
    return classNames
        .filter((el) => el)
        .join(' ')
        .trim()
}
export default classJoin
