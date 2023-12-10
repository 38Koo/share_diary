import { FollowFriend } from '../../../../redux/todaysDiaries/slice'

type FollowFriendsListItemProps = {
  friend: FollowFriend
}

export const FollowFriendsListItem = ({
  friend,
}: FollowFriendsListItemProps) => {
  return (
    <div>
      <li>{friend.user.name}</li>
    </div>
  )
}
