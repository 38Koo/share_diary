import Image from 'next/image'

export type IconProps = {
  imageUrl?: string
  unopened?: boolean
  size?: 'normal' | 'small'
}

export const Icon = ({
  imageUrl,
  unopened = false,
  size = 'normal',
}: IconProps) => {
  return (
    <div
      className={`
        relative inline-block
        ${
          unopened
            ? `
              after:absolute 
              ${
                size === 'normal'
                  ? 'after:right-1 after:top-1'
                  : 'after:-right-0 after:-top-0'
              }
               after:h-3 after:w-3 
              after:rounded-full after:bg-red-400 
              after:content-[""]
            `
            : ''
        }
      `}
    >
      <Image
        src={imageUrl ?? '/next.svg'}
        alt='ユーザーアイコン'
        width={size === 'normal' ? 16 : 8}
        height={size === 'normal' ? 16 : 8}
        className={`
           ${
             size === 'normal'
               ? 'h-16 w-16'
               : 'h-8 w-8'
           }  rounded-full
          border-2 border-solid border-black bg-slate-300
        `}
      />
    </div>
  )
}
