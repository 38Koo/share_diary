import { WEEKDAY } from '../../../../const/const'
import { Text } from '../../../base/Text'
import { CalenderDateList } from '../CalenderDateList'

type CalenderMainProps = {
  year: number
  month: number
  date: number
}

export const CalenderMain = () => {
  return (
    <>
      <div className='flex border border-solid border-black'>
        {WEEKDAY.map((day, i) => (
          <div
            key={day.name}
            className='
              h-7 w-24
              border border-solid border-black
              text-center
            '
          >
            {/* TODO: 土日の色分け */}
            <Text
              color={
                i === 0
                  ? 'text-red-500'
                  : i === 6
                  ? 'text-blue-500'
                  : 'text-black'
              }
            >
              {day.name}
            </Text>
          </div>
        ))}
      </div>
      <CalenderDateList />
    </>
  )
}
