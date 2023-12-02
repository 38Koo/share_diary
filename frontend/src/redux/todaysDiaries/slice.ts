import { createSlice } from '@reduxjs/toolkit'
import { todaysDiariesReducer } from './reducers/todaysDiariesReducer'

export type User = {
  id: number
  name: string
  contents: string
  unopened: boolean
}

export type Users = User[]

export const initialState: Users = []

const todaysDiariesSlice = createSlice({
  name: 'todaysDiaries',
  initialState,
  reducers: {
    todaysDiaries: todaysDiariesReducer,
  },
})

export const { todaysDiaries } =
  todaysDiariesSlice.actions

export const selectTodaysDiaries = (state: any) =>
  state.todaysDiaries

export default todaysDiariesSlice.reducer
