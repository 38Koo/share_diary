/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useDispatch } from 'react-redux'
import {
  updateDateByClick,
  updateFullDateByClick,
} from '../../../../redux/date/slice'
import {
  Icon,
  IconProps,
} from '../../../base/Icon'
import { Text } from '../../../base/Text'

type CalenderDateProps = {
  year: number
  month: number
  date: number
  users?: IconProps[] // FIXME: 他の条件に変更
  notThisMonth?: boolean
  selected?: boolean
}

// TODO: height調整？
export const CalenderDate = ({
  year,
  month,
  date,
  users,
  notThisMonth,
  selected,
}: CalenderDateProps) => {
  const thisDate = new Date(year, month, date)
  const thisDay = thisDate.getDay()

  const dispatch = useDispatch()
  const onClick = () => {
    console.log(month)
    try {
      if (notThisMonth) {
        dispatch(
          updateFullDateByClick({
            year: year,
            month: month,
            date: date,
          }),
        )
      } else {
        dispatch(updateDateByClick(date))
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className={`
        h-24 w-24
         border-solid
      ${
        selected
          ? 'border-2 border-red-300'
          : 'border border-black'
      }
      `}
      onClick={onClick}
    >
      <Text
        size='text-xl'
        color={
          thisDay === 0
            ? notThisMonth
              ? 'text-red-300'
              : 'text-red-500'
            : thisDay === 6
            ? notThisMonth
              ? 'text-blue-300'
              : 'text-blue-500'
            : notThisMonth
            ? 'text-gray-400'
            : 'text-black'
        }
      >
        {date.toString()}
      </Text>
      <div className='pl-1'>
        {users?.slice(0, 2).map((user) => (
          <div
            key={user.imageUrl}
            className='inline-block pr-1'
          >
            <Icon
              size='small'
              unopend={user.unopend}
            />
          </div>
        ))}
        {users && users.length > 2 && (
          <Text>and more...</Text>
        )}
      </div>
    </div>
  )
}
