import { useSession } from 'next-auth/react'
import React, {
  useContext,
  useState,
} from 'react'
import { ShowIndexContext } from '../../../../context/ShowIndexContext'
import { UsersList } from '../../../../redux/thisMonthDiaries/slice'
import { DateWithoutDay } from '../../../../types/types'
import { PrimaryButton } from '../../../base/Button/PrimaryButton'
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

  const { data } = useSession()

  const [isEditMode, setIsEditMode] =
    useState(false)

  return (
    <div className='h-60 border border-solid border-black'>
      {!!usersList[date - 1] &&
        usersList[date - 1].length > 0 && (
          <>
            <div className='flex h-1/5 items-baseline justify-between'>
              {isEditMode ? (
                <UserProfile
                  userName={
                    data?.user?.name ?? '' // FIXME: ユーザー名取得
                  }
                />
              ) : (
                <>
                  <UserProfile
                    userName={
                      usersList[date - 1][
                        showIndex
                      ].name
                    }
                  />
                  <CalendarProfileSlider
                    users={usersList[date - 1]}
                    setShowIndex={setShowIndex}
                  />
                </>
              )}
            </div>
            <div className='relative flex h-4/5'>
              <div className='w-4/5 px-4'>
                {isEditMode ? (
                  <div className='mt-2'>
                    <textarea
                      id='about'
                      name='about'
                      rows={3}
                      className='
                      block h-44 w-full rounded-md
                      border-0 bg-slate-300 py-1.5
                      text-gray-900 shadow-sm ring-1
                    ring-inset ring-gray-300
                      placeholder:text-gray-400 focus:ring-2
                      focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                    '
                    />
                  </div>
                ) : (
                  <Text>
                    {
                      usersList[date - 1][
                        showIndex
                      ].diary
                    }
                  </Text>
                )}
              </div>
              <div>
                {isEditMode ? (
                  <div className='absolute right-2 top-10'>
                    <PrimaryButton
                      isHalfSize
                      onClick={() => {}}
                    >
                      保存する
                    </PrimaryButton>
                  </div>
                ) : (
                  <></>
                )}
                <div className='absolute bottom-2 right-2'>
                  <PrimaryButton
                    onClick={() =>
                      setIsEditMode(!isEditMode)
                    }
                    isHalfSize
                  >{`日記を${
                    isEditMode ? '読む' : '書く'
                  }`}</PrimaryButton>
                </div>
              </div>
            </div>
          </>
        )}
    </div>
  )
}
