import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit'
import { FullDate } from '../../types/types'
import { Users } from '../todaysDiaries/slice'

export type UsersList = Users[]

export type UsersListInitialState = {
  usersList: UsersList
  diariesByDay: UsersList
  isLoading: boolean
}

type UserId = number | undefined

export const initialState: UsersListInitialState =
  {
    usersList: [],
    diariesByDay: [],
    isLoading: false,
  }

export const fetchUsersListAsyncByLanding =
  createAsyncThunk(
    'usersList/fetchUsersListAsyncByLanding',
    async ({
      userId,
      year,
      month,
    }: { userId: UserId } & Pick<
      FullDate,
      'year' | 'month'
    >) => {
      if (userId === undefined) return

      const response = await fetch(
        `http://localhost:4000/api/find/postedUsers?userId=${userId}&year=${year}&month=${month}`,
      )
      const data = await response.json()

      return data
    },
  )

export const fetchDiariesAsyncByLanding =
  createAsyncThunk(
    'usersList/fetchDiariesAsyncByLanding',
    async ({
      userId,
      year,
      month,
      date,
    }: { userId: UserId } & Omit<
      FullDate,
      'day'
    >) => {
      if (userId === undefined) return

      const response = await fetch(
        `http://localhost:4000/api/find/diaries?userId=${userId}&year=${year}&month=${month}&day=${date}`,
      )
      const data = await response.json()

      return data
    },
  )

export const fetchUsersListAsyncByUserActions =
  createAsyncThunk(
    'usersList/fetchUsersListAsyncByUserActions',
    async ({
      year,
      month,
    }: Pick<FullDate, 'year' | 'month'>) => {
      const response = await fetch(
        `/api/v1/thisMonthUsers?year=${year}&month=${month}`,
      )
      const data = await response.json()
      return data
    },
  )

const thisMonthDiariesSlice = createSlice({
  name: 'thisMonthDiaries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchUsersListAsyncByLanding.pending,
      (state) => {
        state.isLoading = true
      },
    )
    builder.addCase(
      fetchUsersListAsyncByLanding.fulfilled,
      (state, action) => {
        state.isLoading = false
        state.usersList = action.payload
      },
    )
    builder.addCase(
      fetchUsersListAsyncByLanding.rejected,
      (state) => {
        state.isLoading = false
      },
    )
    builder.addCase(
      fetchDiariesAsyncByLanding.pending,
      (state) => {
        state.isLoading = true
      },
    )
    builder.addCase(
      fetchDiariesAsyncByLanding.fulfilled,
      (state, action) => {
        state.isLoading = false
        state.diariesByDay = action.payload
      },
    )
    builder.addCase(
      fetchDiariesAsyncByLanding.rejected,
      (state) => {
        state.isLoading = false
      },
    ),
      builder.addCase(
        fetchUsersListAsyncByUserActions.pending,
        (state) => {
          state.isLoading = true
        },
      )
    builder.addCase(
      fetchUsersListAsyncByUserActions.fulfilled,
      (state, action) => {
        state.isLoading = false
        state.usersList = action.payload
      },
    )
    builder.addCase(
      fetchUsersListAsyncByUserActions.rejected,
      (state) => {
        state.isLoading = false
      },
    )
  },
})

export const selectThisMonthDiaries = (
  state: any,
) => state.thisMonthDiaries

export default thisMonthDiariesSlice.reducer
