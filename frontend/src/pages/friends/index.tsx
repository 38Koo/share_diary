import Link from 'next/link'
import { CommonPageLayout } from '../../component/feature/CommonPageLayout'

export default function Friends() {
  return (
    <CommonPageLayout title='Your Friends'>
      <div className='flex space-x-10'>
        <div>
          <Link href='/friends/follow'>
            フォロー
          </Link>
        </div>
        <div>
          <Link href='/friends/follower'>
            フォロワー
          </Link>
        </div>
      </div>
    </CommonPageLayout>
  )
}
