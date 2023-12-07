import type { ThunkDispatch } from '@reduxjs/toolkit'
import { Dispatch } from 'react'
import type { AnyAction } from 'redux'
import { User } from '../../../../../context/AuthUserContext'
import { updateDateWithoutDayByClick } from '../../../../../redux/date/slice'
import {
  UsersListInitialState,
  fetchUsersListAsyncByUserActions,
} from '../../../../../redux/thisMonthDiaries/slice'
import { fetchDiariesAsyncByUserActions } from '../../../../../redux/todaysDiaries/slice'
import { DateWithoutDay } from '../../../../../types/types'
import { formatDateForBE } from '../../../../helper/date'

export const onClickFromNotThisMonth = async (
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
  userId: User['id'] | undefined,
) => {
  try {
    setShowIndex(0)

    if (userId === undefined) return

    const diariesResponse = await fetch(
      `http://localhost:4000/api/find/diaries?userId=${userId}&date=${formatDateForBE(
        dateInfo.year,
        dateInfo.month,
        dateInfo.date,
      )}`,
    )

    const diaries = await diariesResponse.json()

    const postedUserResponse = await fetch(
      `http://localhost:4000/api/find/postedUsers?userId=${userId}$date=${formatDateForBE(
        dateInfo.year,
        dateInfo.month,
        dateInfo.date,
      )}`,
    )

    const postedUser =
      await postedUserResponse.json()

    dispatch(
      updateDateWithoutDayByClick({
        year: dateInfo.year,
        month: dateInfo.month,
        date: dateInfo.date,
      }),
    )
    dispatch(
      fetchDiariesAsyncByUserActions(diaries),
    )
    dispatch(
      fetchUsersListAsyncByUserActions(
        postedUser,
      ),
    )
  } catch (e) {
    console.error(e)
  }
}
