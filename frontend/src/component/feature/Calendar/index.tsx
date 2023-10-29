import { useEffect } from 'react'
import {
  useDispatch,
  useSelector,
} from 'react-redux'
import { selectDate } from '../../../redux/date/slice'
import { AppDispatch } from '../../../redux/store'
import {
  fetchUsersListAsync,
  selectThisMonthDiaries,
} from '../../../redux/thisMonthUserInfo/slice'
import { DateWithoutDay } from '../../../types/types'
import { CalendarHeader } from './CalendarHeader'
import { CalendarMain } from './CalendarMain'
import { CalendarText } from './CalendarText'

export const Calendar = () => {
  const dispatch = useDispatch<AppDispatch>()
  const dateWithoutDay: DateWithoutDay =
    useSelector(selectDate)

  const { usersList, isLoading } = useSelector(
    selectThisMonthDiaries,
  )

  useEffect(() => {
    dispatch(fetchUsersListAsync())
    console.log('fetchUsersListAsync')
  }, [dispatch])

  if (isLoading) {
    return <div>loading...</div>
  }

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
        usersList={usersList}
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
