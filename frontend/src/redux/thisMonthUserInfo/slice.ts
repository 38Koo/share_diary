import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit'
import { TODAY } from '../../const/const'
import { Users } from '../todaysDiaries/slice'

export type UsersList = Users[]

type UsersListInitialState = {
  usersList: UsersList
  isLoading: boolean
}

export const initialState: UsersListInitialState =
  {
    usersList: [],
    isLoading: false,
  }

export const fetchUsersListAsync =
  createAsyncThunk(
    'usersList/fetchUsersListAsync',
    async () => {
      const response = await fetch(
        `/api/v1/thisMonthUsers?year=${TODAY.year}&month=${TODAY.month}`,
      )
      const data = await response.json()
      return data
    },
  )

const thisMonthDiariesSlice = createSlice({
  name: 'thisMonthDiaries',
  initialState,
  reducers: {
    // thisMonthDiaries: thisMonthDiariesReducers,
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchUsersListAsync.pending,
      (state) => {
        state.isLoading = true
      },
    )
    builder.addCase(
      fetchUsersListAsync.fulfilled,
      (state, action) => {
        state.isLoading = false
        state.usersList = action.payload
      },
    )
    builder.addCase(
      fetchUsersListAsync.rejected,
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
