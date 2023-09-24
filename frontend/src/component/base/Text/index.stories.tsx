import { Title } from '@storybook/blocks'
import { Meta, StoryObj } from '@storybook/react'
import { Text } from '.'

export default {
  component: Text,
  tags: ['autodocs'],
  parameters: {
    docs: {
      pages: () => <Title>/</Title>,
    },
  },
} as Meta<typeof Text>

type Story = StoryObj<typeof Text>

export const Default: Story = {
  args: {
    children: 'This is test Text.',
  },
}
