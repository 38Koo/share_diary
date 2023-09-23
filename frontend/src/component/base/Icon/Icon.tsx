import Image from 'next/image'

type IconProps = {
  imageUrl?: string
}

export const Icon = ({ imageUrl }: IconProps) => {
  return (
    <div
      className='
        relative inline-block
        after:absolute 
        after:right-1 after:top-1 after:h-3 after:w-3 
        after:rounded-full after:bg-red-400 
        after:content-[""]
      '
    >
      <Image
        src={imageUrl ?? '/next.svg'}
        alt='ユーザーアイコン'
        width={16}
        height={16}
        className='
          h-16 w-16 rounded-full
          border-2 border-solid border-black bg-slate-300
        '
      />
    </div>
  )
}
