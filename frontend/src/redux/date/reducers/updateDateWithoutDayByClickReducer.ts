import type { PayloadAction } from '@reduxjs/toolkit'
import {
  MIN_YEAR,
  TODAY,
} from '../../../const/const'
import { DateWithoutDay } from '../../../types/types'

export const updateDateWithoutDayByClickReducer =
  (
    state: DateWithoutDay,
    action: PayloadAction<DateWithoutDay>,
  ) => {
    if (
      action.payload.year > TODAY.year &&
      action.payload.month > TODAY.month
    )
      throw new Error('out of range')

    if (action.payload.year < MIN_YEAR)
      throw new Error('out of range')

    return {
      ...state,
      year: action.payload.year,
      month: action.payload.month,
      date: action.payload.date,
    }
  }
