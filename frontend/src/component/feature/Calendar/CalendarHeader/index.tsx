import {
  useContext,
  useEffect,
  useState,
} from 'react'
import { useDispatch } from 'react-redux'
import { TODAY } from '../../../../const/const'
import { AuthUserContext } from '../../../../context/AuthUserContext'
import { ShowIndexContext } from '../../../../context/ShowIndexContext'

import { AppDispatch } from '../../../../redux/store'
import {
  DateWithoutDay,
  MONTH_NAME,
} from '../../../../types/types'
import { ChevronLeftButton } from '../../../base/Button/ChevronLeftButton'
import { ChevronRightButton } from '../../../base/Button/ChevronRightButton'
import { Text } from '../../../base/Text'
import { formatDateForBE } from '../../../helper/date'
import { canSelectableYear } from '../utils/canSelectableYear'
import { fetchUsersListAndDiariesByUserActions } from './utils'

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

      fetchUsersListAndDiariesByUserActions({
        userId: user.id,
        fullDate: formatDateForBE(
          month === MONTH_NAME.JANUARY
            ? year - 1
            : year,
          month === MONTH_NAME.JANUARY
            ? MONTH_NAME.DECEMBER
            : month - 1,
          date,
        ),
        dispatch: dispatch,
        mode: 'decrementMonth',
      })
    } catch (e) {
      console.error(e)
    }
  }
  const onClickNext = async () => {
    try {
      setShowIndex(0)

      if (user?.id === undefined) return

      fetchUsersListAndDiariesByUserActions({
        userId: user.id,
        fullDate: formatDateForBE(
          month === MONTH_NAME.DECEMBER
            ? year + 1
            : year,
          month === MONTH_NAME.DECEMBER
            ? MONTH_NAME.JANUARY
            : month + 1,
          date,
        ),
        dispatch: dispatch,
        mode: 'incrementMonth',
      })
    } catch (e) {
      console.error(e)
    }
  }

  const onChangeYear = async (
    selectYear: number,
  ) => {
    try {
      setShowIndex(0)
      setSelectCount(selectYear)

      if (user?.id === undefined) return

      fetchUsersListAndDiariesByUserActions({
        userId: user.id,
        fullDate: formatDateForBE(
          selectYear,
          month,
          1,
        ),
        dispatch: dispatch,
        mode: 'updateYearByAmount',
        selectYear: selectYear,
      })
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
