import {
  render,
  screen,
} from '@testing-library/react'
import { Icon } from '.'
import '@testing-library/jest-dom'

describe('Icon', () => {
  it('レンダリング確認', () => {
    render(<Icon />)
    expect(
      screen.getByRole('img', {
        name: 'ユーザーアイコン',
      }),
    ).toBeInTheDocument()
  })

  describe('画像表示', () => {
    it('ImageUrlが渡された場合は正しく画像が表示されること', () => {
      render(<Icon imageUrl='' />)

      // expect(screen.getByRole('img', {}))
    })
    // TODO: ImageUrlが不正の場合、デフォルトの画像が表示されること

    it('ImageUrlがundefinedの場合、デフォルトの画像が表示されること', () => {
      render(<Icon />)
    })
  })

  describe('アイコン表示', () => {
    it('unopend がtrueの場合、通知ブロックが表示されること', () => {})

    it('unopend がfalseの場合は通知ブロックが表示されないこと', () => {
      // TODO: it.eachでpropsを渡さない場合とfalseを明示的に渡した場合
    })
  })
})
