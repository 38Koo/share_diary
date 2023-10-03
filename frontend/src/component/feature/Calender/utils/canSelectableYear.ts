import {
  MIN_YEAR,
  TODAY,
} from '../../../../const/const'

export const canSelectableYear = () => {
  const thisYear = TODAY.year

  return Array.from(
    { length: thisYear - MIN_YEAR + 2 },
    (_, i) => i + MIN_YEAR,
  )
}
