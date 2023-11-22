import { useSession } from 'next-auth/react'
import { UsersList } from '../../../../redux/thisMonthDiaries/slice'
import { DateWithoutDay } from '../../../../types/types'
import { UserProfile } from '../../../base/UserProfile'
import { CalendarProfileSlider } from '../CalendarProfileSlider'

type UsersSliderProps = {
  date: DateWithoutDay['date']
  isEditMode: boolean
  usersList: UsersList
  showIndex: number
  setShowIndex: React.Dispatch<
    React.SetStateAction<number>
  >
  showUserSlider: boolean
}

export const UsersSlider = ({
  date,
  isEditMode,
  usersList,
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
                usersList[date - 1][showIndex]
                  .name
              }
            />
            <CalendarProfileSlider
              users={usersList[date - 1]}
              setShowIndex={setShowIndex}
            />
          </>
        )
      )}
    </div>
  )
}
