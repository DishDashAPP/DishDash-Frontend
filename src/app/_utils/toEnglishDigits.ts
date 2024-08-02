export function toEnglishDigits(x: number | string | undefined) {
    if (x === undefined) return ''
    return x?.toString()?.replace(/[۰-۹]/g, (d) => `${'۰۱۲۳۴۵۶۷۸۹'.indexOf(d)}`)
}
