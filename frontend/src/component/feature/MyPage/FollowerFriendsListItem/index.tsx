import { Follower } from '../../../../redux/todaysDiaries/slice'

type FollowerFriendListItemProps = {
  friend: Follower
}

export const FollowerFriendListItem = ({
  friend,
}: FollowerFriendListItemProps) => {
  return (
    <>
      <li>{friend.followedBy.name}</li>
      <div>
        {friend.status === 'PENDING' ? (
          <></>
        ) : null}
      </div>
    </>
  )
}
