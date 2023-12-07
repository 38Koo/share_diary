import type { PayloadAction } from '@reduxjs/toolkit'
import { DiariesForCalender } from '../../../component/helper/date'
import { UsersListInitialState } from '../slice'

export const fetchUsersListAsyncByUserActionsReducer =
  (
    state: UsersListInitialState,
    action: PayloadAction<DiariesForCalender>,
  ) => {
    state.usersList = action.payload
  }
