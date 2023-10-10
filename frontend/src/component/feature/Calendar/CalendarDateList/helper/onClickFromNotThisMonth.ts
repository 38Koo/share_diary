import { Dispatch } from 'react'
import type { AnyAction } from 'redux'
import { updateDateWithoutDayByClick } from '../../../../../redux/date/slice'
import { DateWithoutDay } from '../../../../../types/types'

export const onClickFromNotThisMonth = (
  dateInfo: DateWithoutDay,
  dispatch: Dispatch<AnyAction>,
) => {
  try {
    dispatch(
      updateDateWithoutDayByClick({
        year: dateInfo.year,
        month: dateInfo.month,
        date: dateInfo.date,
      }),
    )
  } catch (e) {
    console.error(e)
  }
}
