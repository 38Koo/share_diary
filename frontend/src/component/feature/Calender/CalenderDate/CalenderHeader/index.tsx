import { Text } from '../../../../base/Text'

export const CalenderHeader = () => {
  return (
    <div className='h-16 space-x-64 border border-solid border-black text-center'>
      <div className='inline-block text-black'>
        ←
      </div>
      <div className='inline-block'>
        <Text size='text-xl'>2023年</Text>
        <Text size='text-xl'>9月</Text>
      </div>
      <div className='inline-block text-black'>
        →
      </div>
    </div>
  )
}
