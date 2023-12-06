import React, {
  useContext,
  useRef,
  useState,
} from 'react'
import { ShowIndexContext } from '../../../../context/ShowIndexContext'
import { UsersWithDiaries } from '../../../../redux/todaysDiaries/slice'
import { DateWithoutDay } from '../../../../types/types'
import { Text } from '../../../base/Text'
import { ChangeModeButton } from './ChangeModeButton'
import { InputDiary } from './InputDiary'
import { SubmitButton } from './SubmitButton'
import { UsersSlider } from './UsersSlider'

type CalendarTextProps = DateWithoutDay & {
  diariesByDay: UsersWithDiaries
}

export const CalendarText = ({
  year,
  month,
  date,
  diariesByDay,
}: CalendarTextProps) => {
  const { showIndex, setShowIndex } = useContext(
    ShowIndexContext,
  )

  const ref = useRef<HTMLTextAreaElement>(null)

  const [isEditMode, setIsEditMode] =
    useState(false)

  const hasDiaries =
    !!diariesByDay && diariesByDay.length > 0

  return (
    <div className='relative h-60 border border-solid border-black'>
      <>
        <UsersSlider
          date={date}
          isEditMode={isEditMode}
          diariesByDay={diariesByDay}
          showIndex={showIndex}
          setShowIndex={setShowIndex}
          showUserSlider={hasDiaries}
        />
        <div className='relative flex h-4/5'>
          <div className='w-4/5 px-4'>
            {isEditMode ? (
              <InputDiary textAreaRef={ref} />
            ) : (
              <Text>
                {hasDiaries
                  ? diariesByDay[showIndex]
                      .contents
                  : ''}
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
