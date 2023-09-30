import { CalenderHeader } from './CalenderDate/CalenderHeader'
import { CalenderMain } from './CalenderMain'
import { CalenderText } from './CalenderText'

export const Calender = () => {
  return (
    <div className='w-[676px] border border-solid border-black'>
      <CalenderHeader />
      <CalenderText />
      <CalenderMain />
    </div>
  )
}
