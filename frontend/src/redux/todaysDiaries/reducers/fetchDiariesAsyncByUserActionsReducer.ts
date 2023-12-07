import type { PayloadAction } from '@reduxjs/toolkit'
import {
  DiariesInitialState,
  UsersWithDiaries,
} from '../slice'

export const fetchDiariesAsyncByUserActionsReducer =
  (
    state: DiariesInitialState,
    action: PayloadAction<UsersWithDiaries>,
  ) => {
    state.diariesByDay = action.payload
  }
