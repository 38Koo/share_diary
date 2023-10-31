import { UsersList } from '../../../../redux/thisMonthDiaries/slice'
import { DateWithoutDay } from '../../../../types/types'
import { CalendarNextMonth } from './CalendarNextMonth'
import { CalendarPreviousMonth } from './CalendarPreviousMonth'
import { CalendarThisMonth } from './CalendarThisMonth'

type CalendarDateListProps = DateWithoutDay & {
  usersList: UsersList
}

export const CalendarDateList = ({
  year,
  month,
  date,
  usersList,
}: CalendarDateListProps) => {
  return (
    <div
      className='
          flex 
          h-fit w-[672px] flex-row
          flex-wrap 
        '
    >
      <CalendarPreviousMonth
        year={year}
        month={month}
      />
      <CalendarThisMonth
        year={year}
        month={month}
        date={date}
        usersList={usersList}
      />
      <CalendarNextMonth
        year={year}
        month={month}
      />
    </div>
  )
}
