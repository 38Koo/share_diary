import { ReactNode } from 'react'
import {
  Icon,
  IconProps,
} from '../../../base/Icon'
import { Text } from '../../../base/Text'

type CalenderDateProps = {
  year: number
  month: number
  date: number
  users: IconProps[] // FIXME: 他の条件に変更
}

export const CalenderDate = ({
  year,
  month,
  date,
  users,
}: CalenderDateProps) => {
  return (
    <div
      className={`
        h-24 w-24
        border-2 border-solid
        border-black
      `}
    >
      <Text size='text-xl'>
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
        {users.length > 2 && (
          <Text>and more...</Text>
        )}
      </div>
    </div>
  )
}
