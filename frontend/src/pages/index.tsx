import { useContext } from 'react'
import { Calendar } from '../component/feature/Calendar'
import { Header } from '../component/feature/Header'
import { AuthUserContext } from '../context/AuthUserContext'

export default function Home() {
  const user = useContext(AuthUserContext)

  return (
    <>
      <Header />
      <div className='flex justify-center bg-[#FCF5E8] py-3'>
        {user && <Calendar />}
      </div>
    </>
  )
}
