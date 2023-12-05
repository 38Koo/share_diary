import { useContext } from 'react'
import { Calendar } from '../component/feature/Calendar'
import { Header } from '../component/feature/Header'
import { AuthUserContext } from '../context/AuthUserContext'

export default function Home() {
  const user = useContext(AuthUserContext)

  return (
    <div className='h-screen bg-[#FCF5E8]'>
      <Header />
      {!!user && (
        <div className='flex justify-center bg-[#FCF5E8] py-3'>
          {<Calendar />}
        </div>
      )}
    </div>
  )
}
