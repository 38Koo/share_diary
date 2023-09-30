import { Text } from '../../../base/Text'
import { UserProfile } from '../../../base/UserProfile'

export const CalenderText = () => {
  return (
    <>
      <div className='h-60 border border-solid border-black'>
        <UserProfile userName='ユーザーネーム' />
        <Text>ここに文章が入ります。</Text>
      </div>
    </>
  )
}
