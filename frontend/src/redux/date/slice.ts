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
    updateByAmount: (
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
  },
})

export const {
  incrementMonth,
  decrementMonth,
  updateByAmount,
} = dateSlice.actions

// TODO: anyやめる
export const selectDate = (state: any) =>
  state.fullDate

export default dateSlice.reducer
