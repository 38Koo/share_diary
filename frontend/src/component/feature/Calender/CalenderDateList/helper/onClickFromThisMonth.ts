import { Dispatch } from 'react'
import type { AnyAction } from 'redux'
import { updateDateByClick } from '../../../../../redux/date/slice'
import { FullDate } from '../../../../../types/types'

export const onClickFromThisMonth = (
  date: FullDate['date'],
  dispatch: Dispatch<AnyAction>,
) => {
  try {
    dispatch(updateDateByClick(date))
  } catch (e) {
    console.error(e)
  }
}
