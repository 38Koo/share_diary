import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'
import { useContext } from 'react'
import { PrimaryButton } from '../../component/base/Button/PrimaryButton'
import { CommonPageLayout } from '../../component/feature/CommonPageLayout'
import { AuthUserContext } from '../../context/AuthUserContext'

export default function AuthCheck() {
  const user = useContext(AuthUserContext)
  const router = useRouter()

  if (user) {
    router.push('/')
  }

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
