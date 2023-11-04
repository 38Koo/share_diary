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
        <div className='flex h-48 w-96 flex-col items-center justify-center space-y-5 rounded-xl border border-red-600'>
          <PrimaryButton
            onClick={() => {}}
            canHover
          >
            Sign up
          </PrimaryButton>
          <PrimaryButton
            onClick={() => {}}
            canHover
          >
            Log in
          </PrimaryButton>
        </div>
      </div>
    </div>
  )
}
