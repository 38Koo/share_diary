import type { PayloadAction } from '@reduxjs/toolkit'
import { DateWithoutDay } from '../../../types/types'

export const updateDateByClickReducer = (
  state: DateWithoutDay,
  action: PayloadAction<number>,
) => {
  return { ...state, date: action.payload }
}
