import { Icon } from '../component/base/Icon'
import { Calendar } from '../component/feature/Calendar'

export default function Home() {
  const usersData = async () => {
    return await fetch('/user')
      .then((status) => {
        if (!status.ok) {
          throw new Error()
        }
        return status.json()
      })
      .then((data) => {
        console.log(data)
      })
      .catch((e) => console.error(e))
  }

  usersData()

  return (
    <>
      <h1 className='text-3xl font-bold underline'>
        Hello world!
      </h1>
      <Icon />
      <div className='flex justify-center'>
        <Calendar />
      </div>
    </>
  )
}
