import { useQuery } from '@tanstack/react-query'
import { Text } from '../../../base/Text'
import { UserProfile } from '../../../base/UserProfile'
import { CalendarProfileSlider } from '../CalendarProfileSlider'

export const CalendarText = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      return await fetch('/user')
        .then((res) => {
          if (!res.ok) throw new Error()

          return res.json()
        })
        .catch((e) => {
          console.error(e)
        })
    },
  })

  if (isLoading) return null

  console.log(data.data)

  return (
    <>
      <div className='h-60 border border-solid border-black'>
        <div className='flex h-14 items-baseline justify-between'>
          <UserProfile userName='ユーザーネーム' />
          {!!data && data.data.length > 0 && (
            <CalendarProfileSlider
              users={data.data[0]}
            />
          )}
        </div>
        <Text>ここに文章が入ります。</Text>
      </div>
    </>
  )
}
