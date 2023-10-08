import { useDispatch } from 'react-redux'
import { DATE } from '../../../../../const/const'
import {
  DateWithoutDay,
  MONTH_NAME,
  WEEKDAY_NAME,
} from '../../../../../types/types'
import { CalenderDate } from '../../CalenderDate'
import { isLeapYear } from '../../utils/isLeapYear'
import { onClickFromNotThisMonth } from '../helper/onClickFromNotThisMonth'

type CalenderNextMonthProps = Omit<
  DateWithoutDay,
  'date'
>

export const CalenderNextMonth = ({
  year,
  month,
}: CalenderNextMonthProps) => {
  const thisMonthLastDate = new Date(
    year,
    month,
    DATE[month].days -
      (month === MONTH_NAME.FEBRUARY &&
      !isLeapYear(year)
        ? 1
        : 0),
  )

  const dayOfthisMonthLastDate =
    thisMonthLastDate.getDay()

  const dispatch = useDispatch()

  if (
    dayOfthisMonthLastDate ===
    WEEKDAY_NAME.SATURDAY
  )
    return null

  return Array.from(
    {
      length:
        WEEKDAY_NAME.SATURDAY -
        dayOfthisMonthLastDate,
    },
    (_, i) => i + 1,
  ).map((dateFromList) => (
    <CalenderDate
      key={dateFromList}
      year={
        month === MONTH_NAME.NOVEMBER
          ? year + 1
          : year
      }
      month={
        month === MONTH_NAME.NOVEMBER
          ? MONTH_NAME.JANUARY
          : month + 1
      }
      date={dateFromList}
      onClick={() =>
        onClickFromNotThisMonth(
          {
            year: year,
            month: month + 1,
            date: dateFromList,
          },
          dispatch,
        )
      }
    />
  ))
}
