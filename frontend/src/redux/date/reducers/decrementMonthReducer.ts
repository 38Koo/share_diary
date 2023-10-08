import { MIN_YEAR } from '../../../const/const'
import { DateWithoutDay } from '../../../types/types'

export const decrementMonthReducer = (
  state: DateWithoutDay,
) => {
  if (state.year <= MIN_YEAR && state.month === 0)
    throw new Error('out of range')

  if (state.month === 0)
    return {
      ...state,
      year: state.year - 1,
      month: 11,
      date: 1,
    }
  return {
    ...state,
    month: state.month - 1,
    date: 1,
  }
}
