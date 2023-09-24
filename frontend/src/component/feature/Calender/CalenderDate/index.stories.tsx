import { Title } from '@storybook/blocks'
import { Meta, StoryObj } from '@storybook/react'
import { CalenderDate } from './'

export default {
  component: CalenderDate,
  tags: ['autodocs'],
  parameters: {
    docs: {
      pages: () => <Title>/</Title>,
    },
  },
} as Meta<typeof CalenderDate>

type Story = StoryObj<typeof CalenderDate>

export const Default: Story = {
  args: {
    date: 12,
    users: [
      {
        size: 'small',
        unopend: true,
      },
      {
        size: 'small',
        unopend: false,
      },
      {
        size: 'small',
        unopend: false,
      },
    ],
  },
}
