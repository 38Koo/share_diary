import { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { DATE } from '../../../../../const/const'
import { AuthUserContext } from '../../../../../context/AuthUserContext'
import { ShowIndexContext } from '../../../../../context/ShowIndexContext'
import { PostedUsers } from '../../../../../redux/todaysDiaries/slice'
import {
  DateWithoutDay,
  MONTH_NAME,
} from '../../../../../types/types'
import { CalendarDate } from '../../CalendarDate'
import { isLeapYear } from '../../utils/isLeapYear'
import { onClickFromThisMonth } from '../helpers/onClickFromThisMonth'

type CalendarThisMonthProps = DateWithoutDay & {
  usersList: PostedUsers
}

export const CalendarThisMonth = ({
  year,
  month,
  date,
  usersList,
}: CalendarThisMonthProps) => {
  const dispatch = useDispatch()

  const { setShowIndex } = useContext(
    ShowIndexContext,
  )

  const user = useContext(AuthUserContext)

  const getMonthLength = () => {
    if (
      month === MONTH_NAME.FEBRUARY &&
      !isLeapYear(year)
    ) {
      return DATE[month].days - 1
    }

    return DATE[month].days
  }

  return Array.from(
    {
      length: getMonthLength(),
    },
    (_, i) => i + 1,
  ).map((dateFromList) => (
    <CalendarDate
      key={dateFromList}
      year={year}
      month={month}
      date={dateFromList}
      selected={dateFromList === date}
      isThisMonth
      users={usersList[dateFromList]}
      onClick={() =>
        onClickFromThisMonth(
          year,
          month,
          date,
          dateFromList,
          user?.id,
          dispatch,
          setShowIndex,
        )
      }
    />
  ))
}
