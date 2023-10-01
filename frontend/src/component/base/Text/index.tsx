type TextProps = {
  children: string
  size?: 'text-base' | 'text-lg' | 'text-xl'
  color?:
    | 'text-black'
    | 'text-gray-400'
    | 'text-red-500'
    | 'text-red-300'
    | 'text-blue-300'
    | 'text-blue-500'
  verticalCenter?: boolean
}

export const Text = ({
  children,
  size = 'text-base',
  color = 'text-black',
  verticalCenter = false,
}: TextProps) => {
  return (
    <div
      className={`
        ${size} ${color}
        ${verticalCenter ? 'leading-loose' : ''}
      `}
    >
      {children}
    </div>
  )
}
