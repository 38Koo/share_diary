import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit'
import { formatDateForBE } from '../../component/helper/date'
import { FullDate } from '../../types/types'
import { todaysDiariesReducer } from './reducers/todaysDiariesReducer'

export type Diary = {
  id: number
  name: string
  date: string
  contents: string
  userId: number
  unopened: boolean
}

// FIXME: 宣言場所変更
export type PostedUser = {
  id: number
  name: string
  email: string
  createdAt: string
  updatedAt: string
  accountId: string
}

export type UserWithDiary = Diary & {
  user: PostedUser
}
export type UsersWithDiaries = UserWithDiary[]

export type Diaries = Diary[]

export type PostedUsers = PostedUser[]

export type DiariesInitialState = {
  diariesByDay: UsersWithDiaries
}

export const initialState: DiariesInitialState = {
  diariesByDay: [],
}

export const fetchDiariesAsyncByLanding =
  createAsyncThunk(
    'fetchDiariesAsyncByLanding',
    async ({
      userId,
      year,
      month,
      date,
    }: { userId: number } & Omit<
      FullDate,
      'day'
    >) => {
      if (userId === undefined) return

      const response = await fetch(
        `http://localhost:4000/api/find/diaries?userId=${userId}&date=${formatDateForBE(
          year,
          month,
          date,
        )}`,
      )
      const data = await response.json()

      return data
    },
  )

const todaysDiariesSlice = createSlice({
  name: 'todaysDiaries',
  initialState,
  reducers: {
    todaysDiaries: todaysDiariesReducer,
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchDiariesAsyncByLanding.pending,
      () => {},
    )
    builder.addCase(
      fetchDiariesAsyncByLanding.fulfilled,
      (state, action) => {
        state.diariesByDay = action.payload
      },
    )
    builder.addCase(
      fetchDiariesAsyncByLanding.rejected,
      () => {},
    )
  },
})

export const { todaysDiaries } =
  todaysDiariesSlice.actions

export const selectTodaysDiaries = (state: any) =>
  state.todaysDiaries

export default todaysDiariesSlice.reducer
