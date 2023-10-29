/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Users } from '../../../../redux/todaysDiaries/slice'
import { DateWithoutDay } from '../../../../types/types'
import { Text } from '../../../base/Text'
import { getColor } from '../utils/getColor'
import { CalendarUserIcons } from './CalendarUserIcons'

type CalendarDateProps = DateWithoutDay & {
  users?: Users
  onClick: () => void
  isThisMonth?: boolean
  selected?: boolean
}

export const CalendarDate = ({
  year,
  month,
  date,
  users,
  isThisMonth = false,
  selected,
  onClick,
}: CalendarDateProps) => {
  const thisDate = new Date(year, month, date)
  const thisDay = thisDate.getDay()

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
        color={getColor(thisDay, isThisMonth)}
      >
        {date.toString()}
      </Text>
      {!!users && users.length > 0 && (
        <CalendarUserIcons users={users} />
      )}
    </div>
  )
}
