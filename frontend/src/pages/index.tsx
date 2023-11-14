import { useSession } from 'next-auth/react'
import { Calendar } from '../component/feature/Calendar'

export default function Home() {
  const { data: session } = useSession()

  return (
    <div className='flex justify-center bg-[#FCF5E8] py-3'>
      <Calendar />
    </div>
  )
}
