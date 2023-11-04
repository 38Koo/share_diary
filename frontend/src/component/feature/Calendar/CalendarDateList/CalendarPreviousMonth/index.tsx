import { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { DATE } from '../../../../../const/const'
import { ShowIndexContext } from '../../../../../context/ShowIndexContext'
import {
  DateWithoutDay,
  MONTH_NAME,
  WEEKDAY_NAME,
} from '../../../../../types/types'
import { CalendarDate } from '../../CalendarDate'
import { isLeapYear } from '../../utils/isLeapYear'
import { onClickFromNotThisMonth } from '../helpers/onClickFromNotThisMonth'

type CalendarPreviousMonthProps = Omit<
  DateWithoutDay,
  'date'
>

export const CalendarPreviousMonth = ({
  year,
  month,
}: CalendarPreviousMonthProps) => {
  const { setShowIndex } = useContext(
    ShowIndexContext,
  )

  const thisMonthFirstDate = new Date(
    year,
    month,
    1,
  )

  const dayOfThisMonthFirstDate =
    thisMonthFirstDate.getDay()

  const dispatch = useDispatch()

  const getDisplayDatesLength = (
    index: number,
  ) => {
    const subtractNumberWhenLoopYear =
      month - 1 === MONTH_NAME.FEBRUARY &&
      isLeapYear(year)
        ? 1
        : 0

    const monthLength =
      DATE[
        month === MONTH_NAME.JANUARY
          ? MONTH_NAME.NOVEMBER
          : month - 1
      ].days - subtractNumberWhenLoopYear

    return (
      index +
      monthLength -
      dayOfThisMonthFirstDate +
      1
    )
  }

  if (
    dayOfThisMonthFirstDate ===
    WEEKDAY_NAME.SUNDAY
  )
    return <></>

  return Array.from(
    { length: dayOfThisMonthFirstDate },
    (_, i) => getDisplayDatesLength(i),
  ).map((dateFromList) => (
    <CalendarDate
      key={dateFromList}
      year={
        month === MONTH_NAME.JANUARY
          ? year - 1
          : year
      }
      month={
        month === MONTH_NAME.JANUARY
          ? MONTH_NAME.NOVEMBER
          : month - 1
      }
      date={dateFromList}
      onClick={() =>
        onClickFromNotThisMonth(
          {
            year:
              month === MONTH_NAME.JANUARY
                ? year - 1
                : year,
            month:
              month === MONTH_NAME.JANUARY
                ? MONTH_NAME.DECEMBER
                : month - 1,
            date: dateFromList,
          },
          dispatch,
          setShowIndex,
        )
      }
    />
  ))
}
