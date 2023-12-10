import type {
  AnyAction,
  ThunkDispatch,
} from '@reduxjs/toolkit'
import { Dispatch } from 'react'
import {
  decrementMonth,
  incrementMonth,
  updateYearByAmount,
} from '../../../../../redux/date/slice'
import { AppDispatch } from '../../../../../redux/store'
import {
  UsersListInitialState,
  fetchUsersListAsyncByUserActions,
} from '../../../../../redux/thisMonthDiaries/slice'
import {
  DiariesInitialState,
  fetchDiariesAsyncByUserActions,
} from '../../../../../redux/todaysDiaries/slice'
import { DateWithoutDay } from '../../../../../types/types'
import {
  formatDateForFE,
  formatDateForFirstDate,
} from '../../../../helper/date'

type Mode =
  | 'decrementMonth'
  | 'incrementMonth'
  | 'updateYearByAmount'

type fetchUsersListAndDiariesByUserActionsArgs = {
  userId: number
  fullDate: string
  dispatch: ThunkDispatch<
    {
      fullDate: DateWithoutDay
      todaysDiaries: DiariesInitialState
      thisMonthDiaries: UsersListInitialState
    },
    undefined,
    AnyAction
  > &
    Dispatch<AppDispatch>
  mode: Mode
  selectYear?: number
}

export const fetchUsersListAndDiariesByUserActions =
  async ({
    userId,
    fullDate,
    dispatch,
    mode,
    selectYear,
  }: fetchUsersListAndDiariesByUserActionsArgs) => {
    const postedUserResponse = await fetch(
      `http://localhost:4000/api/find/postedUsers?userId=${userId}&date=${fullDate}`,
    )

    const postedUserData =
      await postedUserResponse.json()

    const postedUser = formatDateForFE(
      postedUserData,
    )

    const firstDiaryOfTheMonthResponse =
      await fetch(
        `http://localhost:4000/api/find/diaries?userId=${userId}&date=${formatDateForFirstDate(
          fullDate,
        )}`,
      )

    const firstDiaryOfTheMonth =
      await firstDiaryOfTheMonthResponse.json()

    switch (mode) {
      case 'decrementMonth':
        dispatch(decrementMonth())
        break

      case 'incrementMonth':
        dispatch(incrementMonth())
        break

      case 'updateYearByAmount':
        if (selectYear) {
          // FIXME: 条件分岐書かなくて済むように型をいい感じにしたい
          dispatch(updateYearByAmount(selectYear))
        }
        break

      default:
        break
    }

    dispatch(
      fetchUsersListAsyncByUserActions(
        postedUser,
      ),
    )
    dispatch(
      fetchDiariesAsyncByUserActions(
        firstDiaryOfTheMonth,
      ),
    )
  }
