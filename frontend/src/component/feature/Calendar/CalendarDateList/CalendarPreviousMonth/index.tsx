import { useDispatch } from 'react-redux'
import { DATE } from '../../../../../const/const'
import {
  DateWithoutDay,
  MONTH_NAME,
  WEEKDAY_NAME,
} from '../../../../../types/types'
import { CalendarDate } from '../../CalendarDate'
import { isLeapYear } from '../../utils/isLeapYear'
import { onClickFromNotThisMonth } from '../helper/onClickFromNotThisMonth'

type CalendarPreviousMonthProps = Omit<
  DateWithoutDay,
  'date'
>

export const CalendarPreviousMonth = ({
  year,
  month,
}: CalendarPreviousMonthProps) => {
  const thisMonthFirstDate = new Date(
    year,
    month,
    1,
  )

  const dayOfthisMonthFirstDate =
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
      dayOfthisMonthFirstDate +
      1
    )
  }

  if (
    dayOfthisMonthFirstDate ===
    WEEKDAY_NAME.SUNDAY
  )
    return <></>

  return Array.from(
    { length: dayOfthisMonthFirstDate },
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
            year: year,
            month: month - 1,
            date: dateFromList,
          },
          dispatch,
        )
      }
    />
  ))
}
