import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { TODAY } from '../../../../const/const'
import {
  decrementMonth,
  incrementMonth,
  updateYearByAmount,
} from '../../../../redux/date/slice'
import { ChevronLeftButton } from '../../../base/Button/ChevronLeftButton'
import { ChevronRightButton } from '../../../base/Button/ChevronRightButton'
import { Text } from '../../../base/Text'
import { canSelectableYear } from '../utils/canSelectableYear'

type CalenderHeaderProps = {
  year: number
  month: number
  date: number
}

export const CalenderHeader = ({
  year,
  month,
  date,
}: CalenderHeaderProps) => {
  const [selectCount, setSelectCount] = useState(
    TODAY.year,
  )

  const dispatch = useDispatch()

  const onClickPrevious = () => {
    try {
      dispatch(decrementMonth())
    } catch (e) {
      console.error(e)
    }
  }
  const onClickNext = () => {
    try {
      dispatch(incrementMonth())
      console.log(year)
    } catch (e) {
      console.error(e)
    }
  }

  const onChangeYear = (selectYear: number) => {
    try {
      dispatch(updateYearByAmount(selectYear))

      setSelectCount(selectYear)
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
           rounded-lg bg-inherit text-xl
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
