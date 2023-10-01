import { useSelector } from 'react-redux'
import { selectDate } from '../../../redux/date/slice'
import { CalenderHeader } from './CalenderDate/CalenderHeader'
import { CalenderMain } from './CalenderMain'
import { CalenderText } from './CalenderText'

export const Calender = () => {
  const fullDate = useSelector(selectDate)

  console.log(fullDate)
  return (
    <div className='w-[676px] border border-solid border-black'>
      <CalenderHeader
        year={fullDate.year}
        month={fullDate.month}
      />
      <CalenderText />
      <CalenderMain
        year={fullDate.year}
        month={fullDate.month}
        date={fullDate.month}
      />
    </div>
  )
}
