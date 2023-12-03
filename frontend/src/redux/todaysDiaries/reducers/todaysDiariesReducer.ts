import type { PayloadAction } from '@reduxjs/toolkit'
import {
  DiariesInitialState,
  UsersWithDiaries,
} from '../slice'

export const todaysDiariesReducer = (
  state: DiariesInitialState,
  action: PayloadAction<UsersWithDiaries>,
) => {
  return {
    ...state,
    diariesByDay: action.payload,
  }
}
