import type { PayloadAction } from '@reduxjs/toolkit'
import { TODAY } from '../../../const/const'
import { DateWithoutDay } from '../../../types/types'

export const updateYearByAmountReducer = (
  state: DateWithoutDay,
  action: PayloadAction<number>,
) => {
  if (
    action.payload > TODAY.year &&
    state.month > TODAY.month
  )
    throw new Error('out of range')

  return {
    ...state,
    year: action.payload,
    date: 1,
  }
}
