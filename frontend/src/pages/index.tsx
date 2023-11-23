import { Calendar } from '../component/feature/Calendar'
import { Header } from '../component/feature/Header'

export default function Home() {
  return (
    <>
      <Header />
      <div className='flex justify-center bg-[#FCF5E8] py-3'>
        <Calendar />
      </div>
    </>
  )
}
