import { DATE } from '../../../../../const/const'
import { DateWithoutDay } from '../../../../../types/types'
import { CalenderDate } from '../../CalenderDate'
import { isLeapYear } from '../../utils/isLeapYear'

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
      (month + 1 === 2 && !isLeapYear(year)
        ? 1
        : 0),
  )

  const dayOfthisMonthLastDate =
    thisMonthLastDate.getDay()

  if (dayOfthisMonthLastDate === 6) return null

  return Array.from(
    { length: 6 - dayOfthisMonthLastDate },
    (_, i) => i + 1,
  ).map((dateFromList) => (
    <CalenderDate
      key={dateFromList}
      year={month === 11 ? year + 1 : year}
      month={month === 11 ? 0 : month + 1}
      date={dateFromList}
      notThisMonth
    />
  ))
}
