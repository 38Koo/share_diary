import { useState } from 'react'
import { Follower } from '../../../../redux/todaysDiaries/slice'
import { SmallButton } from '../../../base/Button/SmallButton'
import { onClickAcceptApply } from './onClickAcceptApply'
import { onClickDenyApply } from './onClickDenyApply'

type FollowerFriendListItemProps = {
  friend: Follower
}

export const FollowerFriendListItem = ({
  friend,
}: FollowerFriendListItemProps) => {
  const [isPending, setIsPending] = useState(
    friend.status === 'PENDING',
  )

  return (
    <div>
      <li>{friend.followedBy.name}</li>
      <div>
        {isPending ? (
          <div className='flex space-x-4'>
            <SmallButton
              onClick={() =>
                onClickAcceptApply({
                  userId: friend.userId,
                  followedById:
                    friend.followedById,
                  setIsPending: setIsPending,
                })
              }
              color='Accept'
            >
              承諾
            </SmallButton>
            <SmallButton
              onClick={() =>
                onClickDenyApply({
                  userId: friend.userId,
                  followedById:
                    friend.followedById,
                  setIsPending: setIsPending,
                })
              }
              color='Deny'
            >
              拒否
            </SmallButton>
          </div>
        ) : null}
      </div>
    </div>
  )
}
