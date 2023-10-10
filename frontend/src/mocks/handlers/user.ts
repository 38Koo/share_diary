import { rest } from 'msw'

export const user = rest.get(
  '/user',
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        userName: '38koo',
      }),
    )
  },
)
