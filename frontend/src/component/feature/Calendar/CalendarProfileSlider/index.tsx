import { Dispatch, SetStateAction } from 'react'
import { Users } from '../../../../redux/todaysDiaries/slice'
import { Icon } from '../../../base/Icon'

type CalendarProfileSliderProps = {
  users?: Users
  setShowIndex: Dispatch<SetStateAction<number>>
}

export const CalendarProfileSlider = ({
  users,
  setShowIndex,
}: CalendarProfileSliderProps) => {
  const onClick = (index: number) => {
    setShowIndex(index)
  }

  return (
    <div className='flex w-2/3 overflow-x-auto'>
      <div className=' flex-none pl-3 pr-1 pt-1'>
        <div className='flex gap-4'>
          {!!users &&
            users.length > 0 &&
            users.map((user, i) => {
              return (
                <Icon
                  key={user.id}
                  size='small'
                  unopened={user.unopened}
                  onClick={
                    () => onClick(i) as any //FIXME: anyやめる
                  }
                />
              )
            })}
        </div>
      </div>
    </div>
  )
}
