import {
  useContext,
  useEffect,
  useState,
} from 'react'
import { AuthUserContext } from '../../../../context/AuthUserContext'
import {
  FollowFriend,
  Follower,
} from '../../../../redux/todaysDiaries/slice'
import { FollowFriendsListItem } from '../FollowFriendsListItem'
import { FollowerFriendListItem } from '../FollowerFriendsListItem'
import { fetchFollowFriendsList } from './hooks/fetchFollowFriendList'
import { fetchFollowerFriendsList } from './hooks/fetchFollowerFriendList'

type FriendsListProps = {
  isFollower: boolean
}

export const FriendsList = ({
  isFollower,
}: FriendsListProps) => {
  const user = useContext(AuthUserContext)
  const [friendsList, setFriendsList] = useState<
    FollowFriend[] | Follower[]
  >([])

  useEffect(() => {
    if (!user) return
    if (isFollower) {
      fetchFollowerFriendsList(user.id).then(
        (friends) => setFriendsList(friends),
      )
      return
    }

    fetchFollowFriendsList(user.id).then(
      (friends) => setFriendsList(friends),
    )
  }, [setFriendsList, user, isFollower])

  if (!user) return

  return (
    <div className='grid grid-cols-2 gap-x-12 gap-y-6'>
      {friendsList.map((friend) => {
        return isFollower ? (
          <FollowerFriendListItem
            key={friend.id}
            friend={friend as Follower}
          />
        ) : (
          <FollowFriendsListItem
            key={friend.id}
            friend={friend as FollowFriend}
          />
        )
      })}
    </div>
  )
}
