import { TODAY } from '../../../const/const'
import {
  DateWithoutDay,
  MONTH_NAME,
} from '../../../types/types'

export const incrementMonthReducer = (
  state: DateWithoutDay,
) => {
  if (
    state.year > TODAY.year &&
    state.month >= TODAY.month
  )
    throw new Error('out of range')

  if (state.month + 1 === 12)
    return {
      ...state,
      year: state.year + 1,
      month: MONTH_NAME.JANUARY,
      date: 1,
    }

  return {
    ...state,
    month: state.month + 1,
    date: 1,
  }
}
