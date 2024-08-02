import { toEnglishDigits } from '@utils/toEnglishDigits'

export function numberWithCommas(x: number | string) {
    return `${x}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function priceWithCommas(x: number | string | undefined, showInToman = false) {
    return showInToman
        ? numberWithCommas(Math.floor(+toEnglishDigits(`${x || 0}`) / 10))
        : numberWithCommas(`${x || 0}`)
}
