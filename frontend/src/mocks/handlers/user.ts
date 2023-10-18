import { rest } from 'msw'

export type User = {
  userName: string
}

export const user = rest.get(
  '/user',
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          [
            {
              userName: '38koo',
            },
            {
              userName: 'testA',
            },
            {
              userName: 'testB',
            },
            {
              userName: 'testC',
            },
            {
              userName: 'testD',
            },
          ],
        ],
      }),
    )
  },
)
