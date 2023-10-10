import {
  Icon,
  IconProps,
} from '../../../base/Icon'

type CalendarProfileSliderProps = {
  users?: IconProps[]
}

export const CalendarProfileSlider = ({
  users,
}: CalendarProfileSliderProps) => {
  return (
    <div className='flex w-2/3 overflow-x-auto'>
      <div className=' flex-none pl-3 pr-1 pt-1'>
        <div className='flex gap-4'>
          {!!users && users.length > 0 && (
            <Icon size='small' />
          )}
          <Icon size='small' />
          <Icon size='small' />
          <Icon size='small' />
          <Icon size='small' />
          <Icon size='small' />
          <Icon size='small' />
          <Icon size='small' />
          <Icon size='small' />
          <Icon size='small' />
          <Icon size='small' />
          <Icon size='small' />
          <Icon size='small' />
          <Icon size='small' />
          <Icon size='small' />
          <Icon size='small' />
          <Icon size='small' />
          <Icon size='small' />
          <Icon size='small' />
          <Icon size='small' />
          <Icon size='small' />
        </div>
      </div>
    </div>
  )
}
