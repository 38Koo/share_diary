export const paddingZeroForMonthAndDate = (
  date: number,
) => {
  const digitLength = date.toString()
  return digitLength.length === 2
    ? digitLength
    : `0${digitLength}`
}

export const formatDate = (
  year: number,
  month: number,
  date: number,
) => {
  return `${year}${paddingZeroForMonthAndDate(
    month + 1,
  )}${paddingZeroForMonthAndDate(date)}`
}
