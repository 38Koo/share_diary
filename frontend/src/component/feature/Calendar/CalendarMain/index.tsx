import { WEEKDAY } from '../../../../const/const'
import { UsersList } from '../../../../redux/thisMonthDiaries/slice'
import { DateWithoutDay } from '../../../../types/types'
import { Text } from '../../../base/Text'
import { CalendarDateList } from '../CalendarDateList'
import { getColor } from '../utils/getColor'

type CalendarMainProps = DateWithoutDay & {
  usersList: UsersList
}

export const CalendarMain = ({
  year,
  month,
  date,
  usersList,
}: CalendarMainProps) => {
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
            <Text color={getColor(i, true)}>
              {day.name}
            </Text>
          </div>
        ))}
      </div>
      <CalendarDateList
        year={year}
        month={month}
        date={date}
        usersList={usersList}
      />
    </>
  )
}
