import { Text } from '../../Text'

type SmallButtonProps = {
  children: string
  onClick: () => void
  color: 'Accept' | 'Deny'
}

export const SmallButton = ({
  children,
  onClick,
  color,
}: SmallButtonProps) => {
  const displayColor =
    color === 'Accept'
      ? 'bg-[#EB6137]'
      : 'bg-[#C6CED3]'

  return (
    <button
      className={`${displayColor} h-8 w-12 rounded-full border`}
      onClick={onClick}
    >
      <Text fontWeight='font-bold'>
        {children}
      </Text>
    </button>
  )
}
