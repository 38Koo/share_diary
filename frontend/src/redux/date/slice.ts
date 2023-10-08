import { createSlice } from '@reduxjs/toolkit'
import { TODAY } from '../../const/const'
import { DateWithoutDay } from '../../types/types'
import { decrementMonthReducer } from './reducers/decrementMonthReducer'
import { incrementMonthReducer } from './reducers/incrementMonthReducer'
import { updateDateByClickReducer } from './reducers/updateDateByClickReducer'
import { updateDateWithoutDayByClickReducer } from './reducers/updateDateWithoutDayByClickReducer'
import { updateYearByAmountReducer } from './reducers/updateYearByAmountReducer'

export const initialState: DateWithoutDay = {
  year: TODAY.year,
  month: TODAY.month,
  date: TODAY.date,
}

const dateSlice = createSlice({
  name: 'fullDate',
  initialState,
  reducers: {
    incrementMonth: incrementMonthReducer,
    decrementMonth: decrementMonthReducer,
    updateYearByAmount: updateYearByAmountReducer,
    updateDateByClick: updateDateByClickReducer,
    updateDateWithoutDayByClick:
      updateDateWithoutDayByClickReducer,
  },
})

export const {
  incrementMonth,
  decrementMonth,
  updateYearByAmount,
  updateDateByClick,
  updateDateWithoutDayByClick,
} = dateSlice.actions

// TODO: anyやめる
export const selectDate = (state: any) =>
  state.fullDate

export default dateSlice.reducer
