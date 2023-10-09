/**
 * @description うるう年を判定します。
 * @param year
 * @returns number
 */
export const isLeapYear = (year: number) => {
  if (year % 4 !== 0) return false

  if (year % 100 === 0 && year % 400 !== 0)
    return false

  return true
}
