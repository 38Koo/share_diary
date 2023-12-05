import { Diary } from '../../redux/todaysDiaries/slice'

type DiariesFromAPI = Omit<Diary, 'unopened'>[]

export type DiariesForCalender = {
  [key in string]: DiariesFromAPI
}

export const paddingZeroForMonthAndDate = (
  date: number,
) => {
  const digitLength = date.toString()
  return digitLength.length === 2
    ? digitLength
    : `0${digitLength}`
}

export const formatDateForBE = (
  year: number,
  month: number,
  date: number,
) => {
  return `${year}${paddingZeroForMonthAndDate(
    month + 1,
  )}${paddingZeroForMonthAndDate(date)}`
}

const trimmingZero = (date: string) => {
  if (date.length !== 2) return date
  if (date[0] !== '0') return date

  return date.slice(-1)
}

const getDateFromFullDate = (
  fullDate: string,
) => {
  const date = fullDate.slice(-2)

  return trimmingZero(date)
}

export const formatDateForFE = (
  dataFromAPI: DiariesFromAPI,
) => {
  return dataFromAPI.reduce(
    (
      acc: DiariesForCalender,
      cur: Omit<Diary, 'unopened'>,
    ) => {
      const date = getDateFromFullDate(cur.date)
      if (!acc[date]) {
        acc[date] = []
      }

      acc[date].push(cur)
      return acc
    },
    {},
  )
}
