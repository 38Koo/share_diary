import { Title } from '@storybook/blocks'
import { Meta, StoryObj } from '@storybook/react'
import { CalendarProfileSlider } from '.'

export default {
  component: CalendarProfileSlider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      pages: () => <Title>/</Title>,
    },
  },
} as Meta<typeof CalendarProfileSlider>

type Story = StoryObj<
  typeof CalendarProfileSlider
>

export const Default: Story = {}
