import { useDispatch } from 'react-redux'
import {
  decrementMonth,
  incrementMonth,
} from '../../../../../redux/date/slice'
import { ChevronLeftButton } from '../../../../base/Button/ChevronLeftButton'
import { ChevronRightButton } from '../../../../base/Button/ChevronRightButton'
import { Text } from '../../../../base/Text'

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
  const dispatch = useDispatch()

  const onClickPrevious = () => {
    dispatch(decrementMonth())
    console.log('OK!')
  }
  const onClickNext = () => {
    dispatch(incrementMonth())
    console.log('Next!')
  }

  return (
    <div
      className='
        h-16 space-x-64
        border border-solid border-black 
        text-center
      '
    >
      <ChevronLeftButton
        onClick={onClickPrevious}
      />
      <div className='inline-block'>
        <Text size='text-xl'>
          {`${String(year)}年`}
        </Text>
        <Text size='text-xl'>{`${
          month + 1
        }月${date}日`}</Text>
      </div>
      <ChevronRightButton onClick={onClickNext} />
    </div>
  )
}
