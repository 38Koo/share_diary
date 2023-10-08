import { DATE } from '../../../../../const/const'
import { DateWithoutDay } from '../../../../../types/types'
import { CalenderDate } from '../../CalenderDate'
import { isLeapYear } from '../../utils/isLeapYear'

export const CalenderThisMonth = ({
  year,
  month,
  date,
}: DateWithoutDay) => {
  return Array.from(
    {
      length:
        DATE[month].days -
        (month + 1 === 2 && !isLeapYear(year)
          ? 1
          : 0),
    },
    (_, i) => i + 1,
  ).map((dateFromList) => (
    <CalenderDate
      key={dateFromList}
      year={year}
      month={month}
      date={dateFromList}
      selected={dateFromList === date}
    />
  ))
}
