import { DateWithoutDay } from '../../../../types/types'
import { CalendarNextMonth } from './CalendarNextMonth'
import { CalendarPreviousMonth } from './CalendarPreviousMonth'
import { CalendarThisMonth } from './CalendarThisMonth'

export const CalendarDateList = ({
  year,
  month,
  date,
}: DateWithoutDay) => {
  return (
    <div
      className='
          flex 
          h-fit w-[672px] flex-row
          flex-wrap 
        '
    >
      <CalendarPreviousMonth
        year={year}
        month={month}
      />
      <CalendarThisMonth
        year={year}
        month={month}
        date={date}
      />
      <CalendarNextMonth
        year={year}
        month={month}
      />
    </div>
  )
}
