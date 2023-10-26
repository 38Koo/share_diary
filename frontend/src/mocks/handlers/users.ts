import { rest } from 'msw'
import { DateWithoutDay } from '../../types/types'

export type User = {
  id: number
  name: string
  diary: string
}

export const users = rest.get<DateWithoutDay>(
  '/api/v1/users',
  async (req, res, ctx) => {
    const date = Number(
      req.url.searchParams.get('date'),
    )
    const resultCount = date % 7

    return res(
      ctx.status(200),
      ctx.json<User[]>(
        Array.from({
          length: resultCount,
        }).map((_, i) => {
          return {
            id: i + 1,
            name: `test${i}`,
            diary: `今日はこんな一日でした！ - username: test${i}`,
          }
        }),
      ),
    )
  },
)
