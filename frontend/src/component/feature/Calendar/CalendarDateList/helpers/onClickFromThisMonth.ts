import React, { Dispatch } from 'react'
import type { AnyAction } from 'redux'
import { User } from '../../../../../context/AuthUserContext'
import { updateDateByClick } from '../../../../../redux/date/slice'
import { todaysDiaries } from '../../../../../redux/todaysDiaries/slice'
import { FullDate } from '../../../../../types/types'

export const onClickFromThisMonth = async (
  year: FullDate['year'],
  month: FullDate['month'],
  date: FullDate['date'],
  dateFromList: FullDate['date'],
  userId: User['id'] | undefined,
  dispatch: Dispatch<AnyAction>,
  setShowIndex: React.Dispatch<
    React.SetStateAction<number>
  >,
) => {
  try {
    if (date !== dateFromList) {
      setShowIndex(0)
    }

    if (userId === undefined) return

    const response = await fetch(
      `http://localhost:4000/api/find/diaries?userId=${userId}&year=${year}&month=${month}&day=${dateFromList}`,
    )

    const diaries = await response.json()

    dispatch(updateDateByClick(dateFromList))
    dispatch(todaysDiaries(diaries))
  } catch (e) {
    console.error(e)
  }
}
