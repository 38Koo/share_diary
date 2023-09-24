import { DATE } from '../../../../Const/const'
import { Text } from '../../../base/Text'
import { CalenderDate } from '../CalenderDate'

export const CalenderMain = () => {
  const date = new Date()
  const thisMonth = date.getMonth() + 1

  return (
    <>
      <Text>header</Text>
      <div
        className='
          flex 
          h-fit w-[674px] flex-row
          flex-wrap
          border border-solid border-black
        '
      >
        {Array.from(
          { length: DATE[thisMonth].days },
          (_, i) => i + 1,
        ).map((date) => (
          <CalenderDate
            key={date}
            year={2020}
            month={12}
            date={date}
          />
        ))}
      </div>
    </>
  )
}
