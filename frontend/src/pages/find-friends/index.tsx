import {
  faMagnifyingGlass,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef, useState } from 'react'
import { PrimaryButton } from '../../component/base/Button/PrimaryButton'
import { Text } from '../../component/base/Text'
import { CommonPageLayout } from '../../component/feature/CommonPageLayout'

export type FriendData = {
  id: number
  name: string
  email: string
  createdAt: string
  updatedAt: string
  accountId: string
}

export default function FindFriends() {
  const [friendData, setFriendData] =
    useState<FriendData | null>(null)

  const ref = useRef<HTMLInputElement>(null)

  const searchFriendByID = async () => {
    try {
      if (!ref.current || !ref.current.value)
        return

      const userResponse = await fetch(
        `http://localhost:4000/api/find/user?accountId=${ref.current.value}`,
      )

      const user = await userResponse.json()

      setFriendData(user)
    } catch (e) {
      console.error(e)
    }
  }

  const applyFollow = async () => {
    try {
      await fetch(
        'http://localhost:4000/api/apply/follow',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: 2,
            followedById: friendData?.id,
          }),
        },
      )
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <CommonPageLayout title='Find Your Friends'>
      <div className='h-full w-full pb-2 pt-5'>
        <div className='flex w-full items-center justify-center'>
          <Text>accountId:</Text>
          <input
            className='ml-2 px-2 leading-8'
            placeholder="enter friends' accountId"
            ref={ref}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className='pl-2'
            onClick={() => searchFriendByID()}
          />
        </div>
        {friendData && (
          <div className='flex h-fit w-full pl-12 pt-2'>
            <FontAwesomeIcon
              icon={faUser}
              className='h-28 w-28 '
            />
            <div className='pl-6'>
              <Text size='text-lg'>{`name: ${friendData?.name}`}</Text>
              <div className='flex h-20 items-center'>
                <PrimaryButton
                  onClick={() => applyFollow()}
                >
                  フォロー申請
                </PrimaryButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </CommonPageLayout>
  )
}
