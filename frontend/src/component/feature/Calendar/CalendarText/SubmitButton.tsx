import { useContext } from 'react'
import { AuthUserContext } from '../../../../context/AuthUserContext'
import { DateWithoutDay } from '../../../../types/types'
import { PrimaryButton } from '../../../base/Button/PrimaryButton'

type SubmitButtonProps = DateWithoutDay & {
  textAreaRef: React.RefObject<HTMLTextAreaElement>
}

export const SubmitButton = ({
  year,
  month,
  date,
  textAreaRef,
}: SubmitButtonProps) => {
  const user = useContext(AuthUserContext)

  console.log(user)

  const registerDiary = async () => {
    try {
      if (textAreaRef.current == null) {
        return
      }

      await fetch(
        'http://localhost:4000/api/register/diary',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: user?.id,
            year: year,
            month: month,
            day: date,
            contents: textAreaRef.current.value,
          }),
        },
      )
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <div className='absolute right-2 top-10'>
      <PrimaryButton
        isHalfSize
        onClick={() => registerDiary()}
      >
        保存する
      </PrimaryButton>
    </div>
  )
}
