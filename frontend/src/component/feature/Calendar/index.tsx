import { useContext, useEffect } from 'react'
import {
  useDispatch,
  useSelector,
} from 'react-redux'
import { TODAY } from '../../../const/const'
import { AuthUserContext } from '../../../context/AuthUserContext'
import { selectDate } from '../../../redux/date/slice'
import { AppDispatch } from '../../../redux/store'
import {
  fetchUsersListAsyncByLanding,
  selectThisMonthDiaries,
} from '../../../redux/thisMonthDiaries/slice'
import {
  fetchDiariesAsyncByLanding,
  selectTodaysDiaries,
} from '../../../redux/todaysDiaries/slice'
import { DateWithoutDay } from '../../../types/types'
import { CalendarHeader } from './CalendarHeader'
import { CalendarMain } from './CalendarMain'
import { CalendarText } from './CalendarText'

export const Calendar = () => {
  const dispatch = useDispatch<AppDispatch>()
  const dateWithoutDay: DateWithoutDay =
    useSelector(selectDate)

  const { usersList } = useSelector(
    selectThisMonthDiaries,
  )
  const { diariesByDay } = useSelector(
    selectTodaysDiaries,
  )

  const user = useContext(AuthUserContext)

  useEffect(() => {
    if (user == null) return

    dispatch(
      fetchUsersListAsyncByLanding({
        userId: user?.id,
        year: TODAY.year,
        month: TODAY.month,
        date: TODAY.date,
      }),
    )

    dispatch(
      fetchDiariesAsyncByLanding({
        userId: user?.id,
        year: TODAY.year,
        month: TODAY.month,
        date: TODAY.date,
      }),
    )
  }, [user, dispatch])

  if (usersList === undefined) return null

  return (
    <div className='w-[672px] border border-solid border-black'>
      <CalendarHeader
        year={dateWithoutDay.year}
        month={dateWithoutDay.month}
        date={dateWithoutDay.date}
      />
      <CalendarText
        year={dateWithoutDay.year}
        month={dateWithoutDay.month}
        date={dateWithoutDay.date}
        diariesByDay={diariesByDay}
      />
      <CalendarMain
        year={dateWithoutDay.year}
        month={dateWithoutDay.month}
        date={dateWithoutDay.date}
        usersList={usersList}
      />
    </div>
  )
}
