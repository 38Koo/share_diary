import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type FullDateState = {
  year: number
  month: number
  date: number
}

const PREVIOUS_LAST_YEAR = 2015
const today = new Date()

export const initialState: FullDateState = {
  year: today.getFullYear(),
  month: today.getMonth(),
  date: today.getDate(),
}

const dateSlice = createSlice({
  name: 'fullDate',
  initialState,
  reducers: {
    incrementMonth: (state) => {
      if (
        state.year > today.getFullYear() &&
        state.month >= today.getMonth()
      )
        return

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
        state.year <= PREVIOUS_LAST_YEAR &&
        state.month === 0
      )
        return

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
    incrementByAmount: (
      state,
      action: PayloadAction<number>,
    ) => ({
      ...state,
      month: state.month + action.payload,
    }),
  },
})

export const {
  incrementMonth,
  decrementMonth,
  incrementByAmount,
} = dateSlice.actions

// TODO: anyやめる
export const selectDate = (state: any) =>
  state.fullDate

export default dateSlice.reducer
