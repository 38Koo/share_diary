import { Icon } from '../Icon'
import { Text } from '../Text'

type UserProfileProps = {
  userName: string
}

export const UserProfile = ({
  userName,
}: UserProfileProps) => {
  return (
    <div
      className='
        relative flex
        w-1/3 gap-1 border-b-4 border-[#1D4B69] p-1
        before:absolute before:-bottom-1 before:left-0
        before:h-3 before:w-1/5 before:border-b-4 
        before:border-[#B1C7D4] before:content-[""]
      '
    >
      <Icon size='small' />
      <Text verticalCenter>{userName}</Text>
    </div>
  )
}
