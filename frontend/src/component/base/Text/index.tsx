type TextProps = {
  children: string
  size?: 'text-base' | 'text-lg' | 'text-xl'
  color?:
    | 'text-black'
    | 'text-red-500'
    | 'text-blue-500'
}

export const Text = ({
  children,
  size = 'text-base',
  color = 'text-black',
}: TextProps) => {
  return (
    <div
      className={`
        ${size} ${color}
      `}
    >
      {children}
    </div>
  )
}
