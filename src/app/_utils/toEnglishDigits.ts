export function toEnglishDigits(x: string) {
  return x?.replace(/[۰-۹]/g, (d) => `${"۰۱۲۳۴۵۶۷۸۹".indexOf(d)}`);
}
