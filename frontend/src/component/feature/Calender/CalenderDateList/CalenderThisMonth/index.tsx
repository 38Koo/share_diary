import { useDispatch } from 'react-redux'
import { DATE } from '../../../../../const/const'
import {
  DateWithoutDay,
  MONTH_NAME,
} from '../../../../../types/types'
import { CalenderDate } from '../../CalenderDate'
import { isLeapYear } from '../../utils/isLeapYear'
import { onClickFromThisMonth } from '../helper/onClickFromThisMonth'

export const CalenderThisMonth = ({
  year,
  month,
  date,
}: DateWithoutDay) => {
  const dispatch = useDispatch()

  const getMonthLength = () => {
    if (
      month === MONTH_NAME.FEBRUARY &&
      !isLeapYear(year)
    ) {
      return DATE[month].days - 1
    }

    return DATE[month].days
  }

  return Array.from(
    {
      length: getMonthLength(),
    },
    (_, i) => i + 1,
  ).map((dateFromList) => (
    <CalenderDate
      key={dateFromList}
      year={year}
      month={month}
      date={dateFromList}
      selected={dateFromList === date}
      isThisMonth
      onClick={() =>
        onClickFromThisMonth(
          dateFromList,
          dispatch,
        )
      }
    />
  ))
}
