import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {
  MIN_YEAR,
  TODAY,
} from '../../const/const'

export type FullDateState = {
  year: number
  month: number
  date: number
}

export const initialState: FullDateState = {
  year: TODAY.year,
  month: TODAY.month,
  date: TODAY.date,
}

const dateSlice = createSlice({
  name: 'fullDate',
  initialState,
  reducers: {
    incrementMonth: (state) => {
      if (
        state.year > TODAY.year &&
        state.month >= TODAY.month
      )
        throw new Error('out of range')

      if (state.month + 1 === 12)
        return {
          ...state,
          year: state.year + 1,
          month: 0,
          date: 1,
        }

      return {
        ...state,
        month: state.month + 1,
        date: 1,
      }
    },
    decrementMonth: (state) => {
      if (
        state.year <= MIN_YEAR &&
        state.month === 0
      )
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
    },
    updateYearByAmount: (
      state,
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
      }
    },
    updateDateByClick: (
      state,
      action: PayloadAction<number>,
    ) => {
      return { ...state, date: action.payload }
    },
    updateFullDateByClick: (
      state,
      action: PayloadAction<FullDateState>,
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
    },
  },
})

export const {
  incrementMonth,
  decrementMonth,
  updateYearByAmount,
  updateDateByClick,
  updateFullDateByClick,
} = dateSlice.actions

// TODO: anyやめる
export const selectDate = (state: any) =>
  state.fullDate

export default dateSlice.reducer
