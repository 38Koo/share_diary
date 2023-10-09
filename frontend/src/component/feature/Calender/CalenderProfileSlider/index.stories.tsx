import { Title } from '@storybook/blocks'
import { Meta, StoryObj } from '@storybook/react'
import { CalenderProfileSlider } from '.'

export default {
  component: CalenderProfileSlider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      pages: () => <Title>/</Title>,
    },
  },
} as Meta<typeof CalenderProfileSlider>

type Story = StoryObj<
  typeof CalenderProfileSlider
>

export const Default: Story = {}
