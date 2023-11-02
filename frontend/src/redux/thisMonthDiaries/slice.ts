import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit'
import { FullDate } from '../../types/types'
import { Users } from '../todaysDiaries/slice'

export type UsersList = Users[]

export type UsersListInitialState = {
  usersList: UsersList
  isLoading: boolean
}

export const initialState: UsersListInitialState =
  {
    usersList: [],
    isLoading: false,
  }

export const fetchFirstUsersListAsync =
  createAsyncThunk(
    'usersList/fetchFirstUsersListAsync',
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
      fetchFirstUsersListAsync.pending,
      (state) => {
        state.isLoading = true
      },
    )
    builder.addCase(
      fetchFirstUsersListAsync.fulfilled,
      (state, action) => {
        state.isLoading = false
        state.usersList = action.payload
      },
    )
    builder.addCase(
      fetchFirstUsersListAsync.rejected,
      (state) => {
        state.isLoading = false
      },
    )
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
