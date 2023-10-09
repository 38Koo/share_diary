import { useSelector } from 'react-redux'
import { selectDate } from '../../../redux/date/slice'
import { DateWithoutDay } from '../../../types/types'
import { CalenderHeader } from './CalenderHeader'
import { CalenderMain } from './CalenderMain'
import { CalenderText } from './CalenderText'

export const Calender = () => {
  const dateWithoutDay: DateWithoutDay =
    useSelector(selectDate)

  return (
    <div className='w-[672px] border border-solid border-black'>
      <CalenderHeader
        year={dateWithoutDay.year}
        month={dateWithoutDay.month}
        date={dateWithoutDay.date}
      />
      <CalenderText />
      <CalenderMain
        year={dateWithoutDay.year}
        month={dateWithoutDay.month}
        date={dateWithoutDay.date}
      />
    </div>
  )
}
