import { Title } from '@storybook/blocks'
import { Meta, StoryObj } from '@storybook/react'
import { PrimaryButton } from '.'

export default {
  component: PrimaryButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      pages: () => <Title>/</Title>,
    },
  },
} as Meta<typeof PrimaryButton>

type Story = StoryObj<typeof PrimaryButton>

export const Default: Story = {}
