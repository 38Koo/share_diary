import { useSelector } from 'react-redux'
import { selectDate } from '../../../redux/date/slice'
import { DateWithoutDay } from '../../../types/types'
import { CalendarHeader } from './CalendarHeader'
import { CalendarMain } from './CalendarMain'
import { CalendarText } from './CalendarText'

export const Calendar = () => {
  const dateWithoutDay: DateWithoutDay =
    useSelector(selectDate)

  return (
    <div className='w-[672px] border border-solid border-black'>
      <CalendarHeader
        year={dateWithoutDay.year}
        month={dateWithoutDay.month}
        date={dateWithoutDay.date}
      />
      <CalendarText />
      <CalendarMain
        year={dateWithoutDay.year}
        month={dateWithoutDay.month}
        date={dateWithoutDay.date}
      />
    </div>
  )
}
