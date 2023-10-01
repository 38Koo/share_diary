type ChevronLeftButtonProps = {
  onClick: () => void
}

export const ChevronLeftButton = ({
  onClick,
}: ChevronLeftButtonProps) => {
  return (
    <button
      className='
        h-8 w-8
        rounded-full
        border-2 border-solid 
        bg-blue-300
      '
      onClick={onClick}
    >
      ←
    </button>
  )
}
