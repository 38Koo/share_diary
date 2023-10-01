import { Title } from '@storybook/blocks'
import { Meta, StoryObj } from '@storybook/react'
import { ChevronRightButton } from '.'

export default {
  component: ChevronRightButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      pages: () => <Title>/</Title>,
    },
  },
} as Meta<typeof ChevronRightButton>

type Story = StoryObj<typeof ChevronRightButton>

export const Default: Story = {}
