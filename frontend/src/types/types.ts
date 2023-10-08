export type FullDate = {
  year: number
  month: number
  date: number
  day: number
}

export type DateWithoutDay = Omit<FullDate, 'day'>
