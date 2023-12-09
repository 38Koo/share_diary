import {
  useContext,
  useEffect,
  useState,
} from 'react'
import { useDispatch } from 'react-redux'
import { TODAY } from '../../../../const/const'
import { AuthUserContext } from '../../../../context/AuthUserContext'
import { ShowIndexContext } from '../../../../context/ShowIndexContext'
import {
  decrementMonth,
  incrementMonth,
  updateYearByAmount,
} from '../../../../redux/date/slice'
import { AppDispatch } from '../../../../redux/store'
import { fetchUsersListAsyncByUserActions } from '../../../../redux/thisMonthDiaries/slice'
import {
  DateWithoutDay,
  MONTH_NAME,
} from '../../../../types/types'
import { ChevronLeftButton } from '../../../base/Button/ChevronLeftButton'
import { ChevronRightButton } from '../../../base/Button/ChevronRightButton'
import { Text } from '../../../base/Text'
import {
  formatDateForBE,
  formatDateForFE,
} from '../../../helper/date'
import { canSelectableYear } from '../utils/canSelectableYear'

export const CalendarHeader = ({
  year,
  month,
  date,
}: DateWithoutDay) => {
  const [selectCount, setSelectCount] = useState(
    TODAY.year,
  )
  const { setShowIndex } = useContext(
    ShowIndexContext,
  )

  const user = useContext(AuthUserContext)

  const dispatch = useDispatch<AppDispatch>()

  const onClickPrevious = async () => {
    try {
      setShowIndex(0)

      if (user?.id === undefined) return

      const postedUserResponse = await fetch(
        `http://localhost:4000/api/find/postedUsers?userId=${
          user.id
        }&date=${formatDateForBE(
          month === MONTH_NAME.JANUARY
            ? year - 1
            : year,
          month === MONTH_NAME.JANUARY
            ? MONTH_NAME.DECEMBER
            : month - 1,
          date,
        )}`,
      )

      const postedUserData =
        await postedUserResponse.json()

      const postedUser = formatDateForFE(
        postedUserData,
      )

      dispatch(decrementMonth())
      dispatch(
        fetchUsersListAsyncByUserActions(
          postedUser,
        ),
      )
    } catch (e) {
      console.error(e)
    }
  }
  const onClickNext = async () => {
    try {
      setShowIndex(0)

      if (user?.id === undefined) return

      const postedUserResponse = await fetch(
        `http://localhost:4000/api/find/postedUsers?userId=${
          user.id
        }&date=${formatDateForBE(
          month === MONTH_NAME.DECEMBER
            ? year + 1
            : year,
          month === MONTH_NAME.DECEMBER
            ? MONTH_NAME.JANUARY
            : month + 1,
          date,
        )}`,
      )

      const postedUserData =
        await postedUserResponse.json()

      const postedUser = formatDateForFE(
        postedUserData,
      )

      dispatch(incrementMonth())
      dispatch(
        fetchUsersListAsyncByUserActions(
          postedUser,
        ),
      )
    } catch (e) {
      console.error(e)
    }
  }

  const onChangeYear = (selectYear: number) => {
    try {
      // FIXME: diariesも一緒に取得する
      dispatch(updateYearByAmount(selectYear))
      dispatch(
        fetchUsersListAsyncByUserActions({
          year: selectYear,
          month: month,
        }),
      )

      setSelectCount(selectYear)
      setShowIndex(0)
    } catch (e) {
      console.error(e)
    }
  }

  // dispatchの後にsetSelectCountしても即時反映されないのでuseEffectで待機
  useEffect(() => {
    setSelectCount(year)
  }, [year])

  const selectList = canSelectableYear()

  return (
    <div
      className='
        h-20 space-x-64
        border border-solid border-black 
        text-center
      '
    >
      <ChevronLeftButton
        onClick={onClickPrevious}
      />
      <div className='inline-block'>
        <select
          className='
           rounded-lg bg-inherit text-xl text-black
          '
          value={selectCount}
          onChange={(e) =>
            onChangeYear(Number(e.target.value))
          }
        >
          {selectList.map((selectItem) => (
            <option
              value={selectItem}
              key={selectItem}
            >
              {selectItem}年
            </option>
          ))}
        </select>
        <Text size='text-xl'>{`${
          month + 1
        }月${date}日`}</Text>
      </div>
      <ChevronRightButton onClick={onClickNext} />
    </div>
  )
}
