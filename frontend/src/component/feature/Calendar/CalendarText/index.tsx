import React, { useContext } from 'react'
import { ShowIndexContext } from '../../../../context/ShowIndexContext'
import { UsersList } from '../../../../redux/thisMonthUserInfo/slice'
import { DateWithoutDay } from '../../../../types/types'
import { Text } from '../../../base/Text'
import { UserProfile } from '../../../base/UserProfile'
import { CalendarProfileSlider } from '../CalendarProfileSlider'

type CalendarTextProps = DateWithoutDay & {
  usersList: UsersList
}

export const CalendarText = ({
  date,
  usersList,
}: CalendarTextProps) => {
  const { showIndex, setShowIndex } = useContext(
    ShowIndexContext,
  )

  return (
    <>
      <div className='h-60 border border-solid border-black'>
        {!!usersList[date - 1] &&
          usersList[date - 1].length > 0 && (
            <>
              <div className='flex h-14 items-baseline justify-between'>
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
              </div>
              <Text>
                {
                  usersList[date - 1][showIndex]
                    .diary
                }
              </Text>
            </>
          )}
      </div>
    </>
  )
}
