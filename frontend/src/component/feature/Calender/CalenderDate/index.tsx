/* eslint-disable jsx-a11y/no-static-element-interactions */
import { DateWithoutDay } from '../../../../types/types'
import { IconProps } from '../../../base/Icon'
import { Text } from '../../../base/Text'
import { getColor } from '../CalenderDateList/helper/getColor'
import { CalenderUserIcons } from './CalenderUserIcons'

type CalenderDateProps = DateWithoutDay & {
  users?: IconProps[] // FIXME: 他の条件に変更
  onClick: () => void
  isThisMonth?: boolean
  selected?: boolean
}

export const CalenderDate = ({
  year,
  month,
  date,
  users,
  isThisMonth = false,
  selected,
  onClick,
}: CalenderDateProps) => {
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
        <CalenderUserIcons users={users} />
      )}
    </div>
  )
}
