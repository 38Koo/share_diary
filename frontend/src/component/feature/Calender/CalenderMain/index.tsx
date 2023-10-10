import { WEEKDAY } from '../../../../const/const'
import { DateWithoutDay } from '../../../../types/types'
import { Text } from '../../../base/Text'
import { CalenderDateList } from '../CalenderDateList'
import { getColor } from '../utils/getColor'

export const CalenderMain = ({
  year,
  month,
  date,
}: DateWithoutDay) => {
  return (
    <>
      <div className='box-border flex w-[672px] border border-solid border-black'>
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
            <Text color={getColor(i, true)}>
              {day.name}
            </Text>
          </div>
        ))}
      </div>
      <CalenderDateList
        year={year}
        month={month}
        date={date}
      />
    </>
  )
}
