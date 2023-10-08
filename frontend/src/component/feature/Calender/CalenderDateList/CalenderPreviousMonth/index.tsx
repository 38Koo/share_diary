import { DATE } from '../../../../../const/const'
import { DateWithoutDay } from '../../../../../types/types'
import { CalenderDate } from '../../CalenderDate'
import { isLeapYear } from '../../utils/isLeapYear'

type CalenderPreviousMonthProps = Omit<
  DateWithoutDay,
  'date'
>

export const CalenderPreviousMonth = ({
  year,
  month,
}: CalenderPreviousMonthProps) => {
  const thisMonthFirstDate = new Date(
    year,
    month,
    1,
  )

  const dayOfthisMonthFirstDate =
    thisMonthFirstDate.getDay()

  if (dayOfthisMonthFirstDate === 0) return <></>

  return Array.from(
    { length: dayOfthisMonthFirstDate },
    (_, i) =>
      i +
      DATE[month === 0 ? 11 : month - 1].days -
      (month + 1 === 3 && !isLeapYear(year)
        ? 1
        : 0) -
      dayOfthisMonthFirstDate +
      1,
  ).map((dateFromList) => (
    <CalenderDate
      key={dateFromList}
      year={month === 0 ? year - 1 : year}
      month={month === 0 ? 11 : month - 1}
      date={dateFromList}
      notThisMonth
    />
  ))
}
