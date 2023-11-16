import { Text } from '../../Text'

type PrimaryButtonProps = {
  children: string
  onClick: () => void
  canHover?: boolean
  isHalfSize?: boolean
}

export const PrimaryButton = ({
  children,
  onClick,
  canHover = false,
  isHalfSize = false,
}: PrimaryButtonProps) => {
  return (
    <button
      className={`
        h-12 ${isHalfSize ? 'w-24' : 'w-48'} 
        rounded-md border border-cyan-500 
        bg-slate-300       
        ${canHover ? 'hover:h-14 hover:w-52' : ''}
      `}
      onClick={onClick}
    >
      <Text fontWeight='font-bold'>
        {children}
      </Text>
    </button>
  )
}
