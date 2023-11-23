import {
  faCalendarDays,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'

export const Header = () => {
  const router = useRouter()
  return (
    <div className='h-16 w-full bg-[#F9C15F]'>
      <FontAwesomeIcon
        icon={faCalendarDays}
        className='absolute right-16 top-4 h-8 text-black'
        onClick={() => router.push('/')}
      />
      <FontAwesomeIcon
        icon={faUser}
        className='absolute right-2 top-4 h-8 text-black'
        onClick={() => router.push('/mypage/')}
      />
    </div>
  )
}
