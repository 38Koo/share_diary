import { signIn } from 'next-auth/react'
import { PrimaryButton } from '../../component/base/Button/PrimaryButton'
import { Text } from '../../component/base/Text'

export default function AuthCheck() {
  return (
    <div className='flex h-screen flex-col items-center justify-center bg-[#FCF5E8]'>
      <div>
        <Text
          size='text-xl'
          fontWeight='font-bold'
        >
          Authentication
        </Text>
        <div className='flex h-48 w-96  items-center justify-center rounded-xl border border-red-600'>
          <PrimaryButton
            onClick={() => signIn('google')}
            canHover
          >
            Sign In With Google
          </PrimaryButton>
        </div>
      </div>
    </div>
  )
}
