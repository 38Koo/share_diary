import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type FullDateState = {
  year: number
  month: number
  date: number
}

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
    incrementMonth: (state) => ({
      ...state,
      month: state.month + 1,
    }),
    decrementMonth: (state) => ({
      ...state,
      month: state.month - 1,
    }),
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
