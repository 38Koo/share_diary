import { CommonPageLayout } from '../../../component/feature/CommonPageLayout'
import { FriendsList } from '../../../component/feature/MyPage/FriendsList'

export default function FriendsFollower() {
  return (
    <CommonPageLayout title='Your Friends - Follower'>
      <FriendsList isFollower />
    </CommonPageLayout>
  )
}
