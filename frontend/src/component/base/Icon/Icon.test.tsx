import {
  render,
  screen,
} from '@testing-library/react'
import { Icon } from './Icon'
import '@testing-library/jest-dom'

describe('Icon', () => {
  it('レンダリング確認', () => {
    render(<Icon />)
    expect(
      screen.getByText('テスト1'),
    ).toBeInTheDocument()
  })

  describe('画像表示', () => {
    it('ImageUrlが渡された場合は正しく画像が表示されること', () => {
      render(<Icon imageUrl='' />)

      // expect(screen.)
    })
    // TODO: ImageUrlが不正の場合、デフォルトの画像が表示されること

    it('ImageUrlがundefinedの場合、デフォルトの画像が表示されること', () => {
      render(<Icon />)
    })
  })
})
