import {
  FullDate,
  WEEKDAY_NAME,
} from '../../../../types/types'
import { TextProps } from '../../../base/Text'

export const getColor = (
  day: FullDate['day'],
  isThisMonth: boolean,
): TextProps['color'] => {
  if (day === WEEKDAY_NAME.SUNDAY) {
    return isThisMonth
      ? 'text-red-500'
      : 'text-red-300'
  }

  if (day === WEEKDAY_NAME.SATURDAY) {
    return isThisMonth
      ? 'text-blue-500'
      : 'text-blue-300'
  }

  return isThisMonth
    ? 'text-black'
    : 'text-gray-400'
}
