import { Title } from '@storybook/blocks'
import { Meta, StoryObj } from '@storybook/react'
import { ChevronLeftButton } from '.'

export default {
  component: ChevronLeftButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      pages: () => <Title>/</Title>,
    },
  },
} as Meta<typeof ChevronLeftButton>

type Story = StoryObj<typeof ChevronLeftButton>

export const Default: Story = {}
