import { DATE } from '../../../../const/const'
import { CalenderDate } from '../CalenderDate'

export type CalenderDateListProps = {
  year: number
  month: number
  date: number
}

export const CalenderDateList = ({
  year,
  month,
  date,
}: CalenderDateListProps) => {
  const thisDate = new Date(year, month, 1)
  // うるう年判定
  const isLeapYear = () => {
    if (year % 4 !== 0) return false

    if (year % 100 === 0 && year % 400 !== 0)
      return false

    return true
  }
  const thisLastDate = new Date(
    year,
    month,
    DATE[month].days -
      (month + 1 === 2 && !isLeapYear() ? 1 : 0),
  )
  const thisDay = thisDate.getDay()
  const thisLastDay = thisLastDate.getDay()

  const previousMonthCalender = () => {
    if (thisDay === 0) return <></>

    return Array.from(
      { length: thisDay },
      (_, i) =>
        i +
        DATE[month === 0 ? 11 : month - 1].days -
        (month + 1 === 3 && !isLeapYear()
          ? 1
          : 0) -
        thisDay +
        1,
    ).map((date) => (
      <CalenderDate
        key={date}
        year={year}
        month={month - 1}
        date={date}
        notThisMonth
      />
    ))
  }

  const thisMonthCalender = () => {
    return Array.from(
      {
        length:
          DATE[month].days -
          (month + 1 === 2 && !isLeapYear()
            ? 1
            : 0),
      },
      (_, i) => i + 1,
    ).map((date) => (
      <CalenderDate
        key={date}
        year={year}
        month={month}
        date={date}
      />
    ))
  }

  const nextMonthCalender = () => {
    if (thisLastDay === 6) return null

    return Array.from(
      { length: 6 - thisLastDay },
      (_, i) => i + 1,
    ).map((date) => (
      <CalenderDate
        key={date}
        year={year}
        month={month + 1}
        date={date}
        notThisMonth
      />
    ))
  }

  return (
    <div
      className='
          flex 
          h-fit w-fit flex-row
          flex-wrap
          border border-solid border-black
        '
    >
      {previousMonthCalender()}
      {thisMonthCalender()}
      {nextMonthCalender()}
    </div>
  )
}
