import React, { Dispatch } from 'react'
import type { AnyAction } from 'redux'
import { updateDateByClick } from '../../../../../redux/date/slice'
import {
  Users,
  todaysDiaries,
} from '../../../../../redux/todaysDiaries/slice'
import { FullDate } from '../../../../../types/types'

export const onClickFromThisMonth = (
  date: FullDate['date'],
  dateFromList: FullDate['date'],
  users: Users,
  dispatch: Dispatch<AnyAction>,
  setShowIndex: React.Dispatch<
    React.SetStateAction<number>
  >,
) => {
  try {
    dispatch(updateDateByClick(dateFromList))
    dispatch(todaysDiaries(users as any)) // FIXME: anyやめる

    if (date !== dateFromList) {
      setShowIndex(0)
    }
  } catch (e) {
    console.error(e)
  }
}
