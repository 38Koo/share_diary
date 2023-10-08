import { useSelector } from 'react-redux'
import { selectDate } from '../../../redux/date/slice'
import { CalenderHeader } from './CalenderHeader'
import { CalenderMain } from './CalenderMain'
import { CalenderText } from './CalenderText'

export const Calender = () => {
  const fullDate = useSelector(selectDate)

  return (
    <div className='w-[672px] border border-solid border-black'>
      <CalenderHeader
        year={fullDate.year}
        month={fullDate.month}
        date={fullDate.date}
      />
      <CalenderText />
      <CalenderMain
        year={fullDate.year}
        month={fullDate.month}
        date={fullDate.date}
      />
    </div>
  )
}
