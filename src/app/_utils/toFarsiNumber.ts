export function toFarsiNumber(n: number | undefined) {
    if (n === undefined) return ''

    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']

    return n
        .toString()
        .split('')
        .map((x) => (x == '.' ? '.' : farsiDigits[Number(x)]))
        .join('')
}
