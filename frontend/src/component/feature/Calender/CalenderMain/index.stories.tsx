import { Title } from '@storybook/blocks'
import { Meta, StoryObj } from '@storybook/react'
import { CalenderMain } from '.'

export default {
  component: CalenderMain,
  tags: ['autodocs'],
  parameters: {
    docs: {
      pages: () => <Title>/</Title>,
    },
  },
} as Meta<typeof CalenderMain>

type Story = StoryObj<typeof CalenderMain>

export const Default: Story = {}
