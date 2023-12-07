import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit'
import {
  DiariesForCalender,
  formatDateForBE,
  formatDateForFE,
} from '../../component/helper/date'
import { FullDate } from '../../types/types'
import { fetchUsersListAsyncByUserActionsReducer } from './reducers/fetchUsersListAsyncByUserActionsReducer'

export type UsersListInitialState = {
  usersList: DiariesForCalender
  isLoading: boolean
}

type UserId = number | undefined

export const initialState: UsersListInitialState =
  {
    usersList: {},
    isLoading: false,
  }

export const fetchUsersListAsyncByLanding =
  createAsyncThunk(
    'usersList/fetchUsersListAsyncByLanding',
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
        `http://localhost:4000/api/find/postedUsers?userId=${userId}&date=${formatDateForBE(
          year,
          month,
          date,
        )}`,
      )
      const data = await response.json()

      const formattedDiaries =
        formatDateForFE(data)

      return formattedDiaries
    },
  )

const thisMonthDiariesSlice = createSlice({
  name: 'thisMonthDiaries',
  initialState,
  reducers: {
    fetchUsersListAsyncByUserActions:
      fetchUsersListAsyncByUserActionsReducer,
  },
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
        if (action.payload) {
          state.usersList = action.payload
        }
      },
    )
    builder.addCase(
      fetchUsersListAsyncByLanding.rejected,
      (state) => {
        state.isLoading = false
      },
    )
  },
})

export const {
  fetchUsersListAsyncByUserActions,
} = thisMonthDiariesSlice.actions

export const selectThisMonthDiaries = (
  state: any,
) => state.thisMonthDiaries

export default thisMonthDiariesSlice.reducer
