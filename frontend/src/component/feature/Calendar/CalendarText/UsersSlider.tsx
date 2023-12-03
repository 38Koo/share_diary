import { useSession } from 'next-auth/react'
import { UsersWithDiaries } from '../../../../redux/todaysDiaries/slice'
import { DateWithoutDay } from '../../../../types/types'
import { UserProfile } from '../../../base/UserProfile'
import { CalendarProfileSlider } from '../CalendarProfileSlider'

type UsersSliderProps = {
  date: DateWithoutDay['date']
  isEditMode: boolean
  diariesByDay: UsersWithDiaries
  showIndex: number
  setShowIndex: React.Dispatch<
    React.SetStateAction<number>
  >
  showUserSlider: boolean
}

export const UsersSlider = ({
  date,
  isEditMode,
  diariesByDay,
  showIndex,
  setShowIndex,
  showUserSlider,
}: UsersSliderProps) => {
  const { data } = useSession()

  return (
    <div className='flex h-1/5 items-baseline justify-between'>
      {isEditMode ? (
        <UserProfile
          userName={
            data?.user?.name ?? '' // FIXME: ユーザー名取得
          }
        />
      ) : (
        showUserSlider && (
          <>
            <UserProfile
              userName={
                diariesByDay[showIndex].user.name
              }
            />
            <CalendarProfileSlider
              users={diariesByDay}
              setShowIndex={setShowIndex}
            />
          </>
        )
      )}
    </div>
  )
}
