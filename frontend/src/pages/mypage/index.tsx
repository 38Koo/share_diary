import {
  faMagnifyingGlass,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { Text } from '../../component/base/Text'
import { CommonPageLayout } from '../../component/feature/CommonPageLayout'

export default function MyPage() {
  const router = useRouter()

  const { data } = useSession()

  return (
    <CommonPageLayout title='Your Account'>
      <div className='flex flex-col'>
        <Text
          size='text-lg'
          fontWeight='font-bold'
        >
          {data?.user?.name ?? ''}
        </Text>
        <div className='space-x-4'>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className='h-8'
            onClick={() =>
              router.push('/find-friends/')
            }
          />
          <FontAwesomeIcon
            icon={faUserFriends}
            className='h-8'
            onClick={() =>
              router.push('/find-friends/')
            }
          />
        </div>
      </div>
    </CommonPageLayout>
  )
}
