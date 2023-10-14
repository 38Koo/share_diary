import {
  Icon,
  IconProps,
} from '../../../../base/Icon'
import { Text } from '../../../../base/Text'

type CalendarUserIconsProps = {
  users?: IconProps[] // FIXME: 他の条件に変更
}

export const CalendarUserIcons = ({
  users,
}: CalendarUserIconsProps) => {
  return (
    <>
      <div className='pl-1'>
        {users?.slice(0, 2).map((user) => (
          <div
            key={user.imageUrl}
            className='inline-block pr-1'
          >
            <Icon
              size='small'
              unopened={user.unopened}
            />
          </div>
        ))}
        {users && users.length > 2 && (
          <Text>and more...</Text>
        )}
      </div>
    </>
  )
}
