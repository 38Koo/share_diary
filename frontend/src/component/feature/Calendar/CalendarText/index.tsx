import { useQuery } from '@tanstack/react-query'
import { DateWithoutDay } from '../../../../types/types'
import { Text } from '../../../base/Text'
import { UserProfile } from '../../../base/UserProfile'
import { CalendarProfileSlider } from '../CalendarProfileSlider'

export const CalendarText = ({
  year,
  month,
  date,
}: DateWithoutDay) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      return await fetch(
        `/api/v1/todaysUsers?year=${year}&month=${month}&date=${date}`,
      )
        .then((res) => {
          if (!res.ok) throw new Error()
          return res.json()
        })
        .catch((e) => {
          console.error(e)
        })
    },
  })

  if (isLoading) {
    return null
  }

  return (
    <>
      <div className='h-60 border border-solid border-black'>
        {!!data.length && (
          <>
            <div className='flex h-14 items-baseline justify-between'>
              <UserProfile
                userName={data[0].name}
              />
              <CalendarProfileSlider
                users={data}
              />
            </div>
            <Text>{data[0].diary}</Text>
          </>
        )}
      </div>
    </>
  )
}
