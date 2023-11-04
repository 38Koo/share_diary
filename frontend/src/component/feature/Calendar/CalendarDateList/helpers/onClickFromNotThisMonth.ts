import type { ThunkDispatch } from '@reduxjs/toolkit'
import { Dispatch } from 'react'
import type { AnyAction } from 'redux'
import { updateDateWithoutDayByClick } from '../../../../../redux/date/slice'
import {
  UsersListInitialState,
  fetchUsersListAsyncByUserActions,
} from '../../../../../redux/thisMonthDiaries/slice'
import { DateWithoutDay } from '../../../../../types/types'

export const onClickFromNotThisMonth = (
  dateInfo: DateWithoutDay,
  dispatch: Dispatch<AnyAction> &
    ThunkDispatch<
      {
        thisMonthDiaries: UsersListInitialState
      },
      undefined,
      AnyAction
    >,
  setShowIndex: React.Dispatch<
    React.SetStateAction<number>
  >,
) => {
  try {
    dispatch(
      updateDateWithoutDayByClick({
        year: dateInfo.year,
        month: dateInfo.month,
        date: dateInfo.date,
      }),
    )
    dispatch(
      fetchUsersListAsyncByUserActions({
        year: dateInfo.year,
        month: dateInfo.month,
      }),
    )
    setShowIndex(0)
  } catch (e) {
    console.error(e)
  }
}
