import React, {
  useContext,
  useRef,
  useState,
} from 'react'
import { ShowIndexContext } from '../../../../context/ShowIndexContext'
import { UsersList } from '../../../../redux/thisMonthDiaries/slice'
import { DateWithoutDay } from '../../../../types/types'
import { Text } from '../../../base/Text'
import { ChangeModeButton } from './ChangeModeButton'
import { InputDiary } from './InputDiary'
import { SubmitButton } from './SubmitButton'
import { UsersSlider } from './UsersSlider'

type CalendarTextProps = DateWithoutDay & {
  usersList: UsersList
}

export const CalendarText = ({
  year,
  month,
  date,
  usersList,
}: CalendarTextProps) => {
  const { showIndex, setShowIndex } = useContext(
    ShowIndexContext,
  )

  const ref = useRef<HTMLTextAreaElement>(null)

  const [isEditMode, setIsEditMode] =
    useState(false)

  const hasFollowersDiaries =
    !!usersList[date - 1] &&
    usersList[date - 1].length > 0

  return (
    <div className='relative h-60 border border-solid border-black'>
      <>
        {hasFollowersDiaries ? (
          <UsersSlider
            date={date}
            isEditMode={isEditMode}
            usersList={usersList}
            showIndex={showIndex}
            setShowIndex={setShowIndex}
          />
        ) : (
          <div className='h-1/5' />
        )}
        <div className='relative flex h-4/5'>
          <div className='w-4/5 px-4'>
            {isEditMode ? (
              <InputDiary textAreaRef={ref} />
            ) : (
              <Text>
                {
                  usersList[date - 1][showIndex]
                    .diary
                }
              </Text>
            )}
          </div>
          <div>
            {isEditMode ? (
              <SubmitButton
                year={year}
                month={month}
                date={date}
                textAreaRef={ref}
              />
            ) : (
              <></>
            )}
            <ChangeModeButton
              isEditMode={isEditMode}
              setIsEditMode={setIsEditMode}
            />
          </div>
        </div>
      </>
    </div>
  )
}
