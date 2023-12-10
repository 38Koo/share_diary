import { CommonPageLayout } from '../../../component/feature/CommonPageLayout'
import { FriendsList } from '../../../component/feature/MyPage/FriendsList'

export default function FriendsFollow() {
  return (
    <CommonPageLayout title='Your Friends'>
      <FriendsList isFollower={false} />
    </CommonPageLayout>
  )
}
