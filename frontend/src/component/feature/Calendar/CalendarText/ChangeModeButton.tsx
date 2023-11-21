import { PrimaryButton } from '../../../base/Button/PrimaryButton'

type ChangeModeButtonProps = {
  isEditMode: boolean
  setIsEditMode: (
    value: React.SetStateAction<boolean>,
  ) => void
}

export const ChangeModeButton = ({
  isEditMode,
  setIsEditMode,
}: ChangeModeButtonProps) => {
  return (
    <div className='absolute bottom-2 right-2'>
      <PrimaryButton
        onClick={() => setIsEditMode(!isEditMode)}
        isHalfSize
      >{`日記を${
        isEditMode ? '読む' : '書く'
      }`}</PrimaryButton>
    </div>
  )
}
