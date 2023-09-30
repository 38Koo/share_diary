import { Title } from '@storybook/blocks'
import { Meta, StoryObj } from '@storybook/react'
import { UserProfile } from '.'

export default {
  component: UserProfile,
  tags: ['autodocs'],
  parameters: {
    docs: {
      pages: () => <Title>/</Title>,
    },
  },
} as Meta<typeof UserProfile>

type Story = StoryObj<typeof UserProfile>

export const Default: Story = {}
