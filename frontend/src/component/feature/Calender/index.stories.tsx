import { Title } from '@storybook/blocks'
import { Meta, StoryObj } from '@storybook/react'
import { Calender } from '.'

export default {
  component: Calender,
  tags: ['autodocs'],
  parameters: {
    docs: {
      pages: () => <Title>/</Title>,
    },
  },
} as Meta<typeof Calender>

type Story = StoryObj<typeof Calender>

export const Default: Story = {}
