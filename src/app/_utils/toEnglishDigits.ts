export function toEnglishDigits(x: number | string) {
    return x?.toString()?.replace(/[۰-۹]/g, (d) => `${'۰۱۲۳۴۵۶۷۸۹'.indexOf(d)}`)
}
