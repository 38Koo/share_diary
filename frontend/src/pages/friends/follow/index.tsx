import { CommonPageLayout } from '../../../component/feature/CommonPageLayout'
import { FriendsList } from '../../../component/feature/MyPage/FriendsList'

export default function FriendsFollow() {
  return (
    <CommonPageLayout title='Your Friends - Follow'>
      <FriendsList isFollower={false} />
    </CommonPageLayout>
  )
}
