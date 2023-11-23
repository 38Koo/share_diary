import { Text } from '../../base/Text'
import { Header } from '../Header'

type CommonPageLayoutProps = {
  title: string
  children: React.ReactElement
}

export const CommonPageLayout = ({
  title,
  children,
}: CommonPageLayoutProps) => {
  return (
    <>
      <Header />
      <div className='flex h-screen flex-col items-center justify-center bg-[#FCF5E8]'>
        <div>
          <Text
            size='text-xl'
            fontWeight='font-bold'
          >
            {title}
          </Text>
          <div className='flex h-48 w-96  items-center justify-center rounded-xl border border-red-600'>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
