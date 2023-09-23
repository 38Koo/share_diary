import { Title } from '@storybook/blocks'
import { StoryObj } from '@storybook/react'
import { Icon } from './Icon'

export default {
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      pages: () => <Title>/</Title>,
    },
  },
}

type Story = StoryObj<typeof Icon>

export const Default: Story = {
  args: {
    // imageUrl: '/context.png',
  },
}
