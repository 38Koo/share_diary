import {
  faMagnifyingGlass,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

import { useContext } from 'react'
import { Text } from '../../component/base/Text'
import { CommonPageLayout } from '../../component/feature/CommonPageLayout'
import { AuthUserContext } from '../../context/AuthUserContext'

export default function MyPage() {
  const user = useContext(AuthUserContext)

  if (!user) return

  return (
    <CommonPageLayout title='Your Account'>
      <div className='-mt-6 flex flex-col space-y-4'>
        <div>
          <Text
            size='text-lg'
            fontWeight='font-bold'
          >
            {`name: ${user.name}`}
          </Text>
          <Text
            size='text-lg'
            fontWeight='font-bold'
          >
            your Account Id:
          </Text>
          <Text
            size='text-lg'
            fontWeight='font-bold'
          >
            {`${user.accountId}`}
          </Text>
        </div>
        <div className='flex justify-center space-x-4 pb-2'>
          <Link href='/find-friends/'>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className='h-8'
            />
          </Link>
          <Link href='/friends/'>
            <FontAwesomeIcon
              icon={faUserFriends}
              className='h-8'
            />
          </Link>
        </div>
      </div>
    </CommonPageLayout>
  )
}
