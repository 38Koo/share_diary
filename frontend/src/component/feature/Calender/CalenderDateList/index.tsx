import { DATE } from '../../../../const/const'
import { CalenderDate } from '../CalenderDate'

export const CalenderDateList = () => {
  const thisDate = new Date(2023, 6, 1)
  const thisLastDate = new Date(2023, 6, 31)
  const thisMonth = thisDate.getMonth()
  const thisDay = thisDate.getDay()
  const thisLastDay = thisLastDate.getDay()

  const previousMonthCalender = () => {
    if (thisDay === 0) return <></>

    return Array.from(
      { length: thisDay },
      (_, i) =>
        i +
        DATE[thisMonth - 1].days -
        thisDay +
        1,
    ).map((date) => (
      <CalenderDate
        key={date}
        year={2023}
        month={5}
        date={date}
        notThisMonth
      />
    ))
  }

  const thisMonthCalender = () => {
    return Array.from(
      { length: DATE[thisMonth].days },
      (_, i) => i + 1,
    ).map((date) => (
      <CalenderDate
        key={date}
        year={2023}
        month={6}
        date={date}
      />
    ))
  }

  const nextMonthCalender = () => {
    console.log(thisLastDay)
    if (thisLastDay === 6) return null

    return Array.from(
      { length: 6 - thisLastDay },
      (_, i) => i + 1,
    ).map((date) => (
      <CalenderDate
        key={date}
        year={2023}
        month={7}
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
