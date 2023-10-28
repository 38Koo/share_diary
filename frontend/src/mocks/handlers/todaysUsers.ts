import { rest } from 'msw'
import { Users } from '../../redux/todaysDiaries/slice'
import { DateWithoutDay } from '../../types/types'

export const todaysUsers =
  rest.get<DateWithoutDay>(
    '/api/v1/todaysUsers',
    async (req, res, ctx) => {
      const date = Number(
        req.url.searchParams.get('date'),
      )
      const resultCount = date % 7

      return res(
        ctx.status(200),
        ctx.json<Users>(
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
