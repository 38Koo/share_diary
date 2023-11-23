import { signIn } from 'next-auth/react'
import { PrimaryButton } from '../../component/base/Button/PrimaryButton'
import { CommonPageLayout } from '../../component/feature/CommonPageLayout'

export default function AuthCheck() {
  return (
    <CommonPageLayout title='Authentication'>
      <PrimaryButton
        onClick={() => signIn('google')}
        canHover
      >
        Sign In With Google
      </PrimaryButton>
    </CommonPageLayout>
  )
}
