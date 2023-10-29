import { rest } from 'msw'
import { isLeapYear } from '../../component/feature/Calendar/utils/isLeapYear'
import { DATE } from '../../const/const'
import { UsersList } from '../../redux/thisMonthUserInfo/slice'
import {
  DateWithoutDay,
  MONTH_NAME,
} from '../../types/types'

const mockDiary = [
  `今日はこんな一日でした！虫取りして、BBQして充実した一日でした！`,
  `今日は水族館に行って、ペンギンを見てきました！`,
  `今日はボルダリングに行って、筋肉痛になりました！`,
  `今日はお茶を飲んで、ゆっくり過ごしました！`,
  `今日はサッカーをして、楽しかったです！`,
  `今日は勉強を一生懸命やりました！`,
  `今日は学校の宿題をやりました！`,
  `今日はお菓子を食べました！`,
  `今日は行列のできるラーメン屋さんに行きました！`,
  `今日は本屋に行ってたくさん本を買いました。`,
]

export const thisMonthUsers = rest.get<
  Omit<DateWithoutDay, 'date'>
>(
  '/api/v1/thisMonthUsers',
  async (req, res, ctx) => {
    const paramYear: number = Number(
      req.url.searchParams.get('year'),
    )
    const paramMonth = Number(
      req.url.searchParams.get('month'),
    )

    const lastDateOfMonth =
      DATE[paramMonth].days -
      (paramMonth === MONTH_NAME.FEBRUARY &&
      !isLeapYear(paramYear)
        ? 1
        : 0)

    return res(
      ctx.status(200),
      ctx.json<UsersList>(
        Array.from({
          length: lastDateOfMonth,
        }).map((_, i) => {
          return Array.from({
            length: Math.floor(Math.random() * 8),
          }).map((_, j) => {
            return {
              id: j + 1,
              name: `test${j}`,
              diary:
                mockDiary[
                  Math.floor(
                    Math.random() *
                      mockDiary.length,
                  )
                ],
              unopened: (i + j) % 5 === 0,
            }
          })
        }),
      ),
    )
  },
)
