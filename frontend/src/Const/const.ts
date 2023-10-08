import { DateWithoutDay } from '../types/types'

const currentDate = new Date()

export const TODAY: DateWithoutDay = {
  year: currentDate.getFullYear(),
  month: currentDate.getMonth(),
  date: currentDate.getDate(),
}

export const MIN_YEAR = 2015

export const DATE = [
  {
    name: 'January',
    days: 31,
  },
  {
    name: 'February',
    days: 29,
  },
  {
    name: 'March',
    days: 31,
  },
  {
    name: 'April',
    days: 30,
  },
  {
    name: 'May:',
    days: 31,
  },
  {
    name: 'June',
    days: 30,
  },
  {
    name: 'July',
    days: 31,
  },
  {
    name: 'August',
    days: 31,
  },
  {
    name: 'September',
    days: 30,
  },
  {
    name: 'October',
    days: 31,
  },
  {
    name: 'November',
    days: 30,
  },
  {
    name: 'December',
    days: 31,
  },
] as const

export const WEEKDAY = [
  { name: '日', english: 'Sunday' },
  { name: '月', english: 'Monday' },
  { name: '火', english: 'Tuesday' },
  { name: '水', english: 'Wednesday' },
  { name: '木', english: 'Thursday' },
  { name: '金', english: 'Friday' },
  { name: '土', english: 'Saturday' },
]
