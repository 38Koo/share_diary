import { DateWithoutDay } from '../../../../types/types'
import { CalenderNextMonth } from './CalenderNextMonth'
import { CalenderPreviousMonth } from './CalenderPreviousMonth'
import { CalenderThisMonth } from './CalenderThisMonth'

export const CalenderDateList = ({
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
      <CalenderPreviousMonth
        year={year}
        month={month}
      />
      <CalenderThisMonth
        year={year}
        month={month}
        date={date}
      />
      <CalenderNextMonth
        year={year}
        month={month}
      />
    </div>
  )
}
