import { Text } from '../../../base/Text'
import { UserProfile } from '../../../base/UserProfile'
import { CalenderProfileSlider } from '../CalenderProfileSlider'

export const CalenderText = () => {
  return (
    <>
      <div className='h-60 border border-solid border-black'>
        <div className='flex h-14 items-baseline justify-between'>
          <UserProfile userName='ユーザーネーム' />
          <CalenderProfileSlider />
        </div>
        <Text>ここに文章が入ります。</Text>
      </div>
    </>
  )
}
