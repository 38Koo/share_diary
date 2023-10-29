import { Title } from '@storybook/blocks'
import { Meta, StoryObj } from '@storybook/react'
import { CalendarDate } from '.'

export default {
  component: CalendarDate,
  tags: ['autodocs'],
  parameters: {
    docs: {
      pages: () => <Title>/</Title>,
    },
  },
} as Meta<typeof CalendarDate>

type Story = StoryObj<typeof CalendarDate>

export const Default: Story = {
  args: {
    date: 12,
    users: [
      {
        id: 1,
        name: 'test',
        diary: 'test',
        unopened: true,
      },
      {
        id: 2,
        name: 'test',
        diary: 'test',
        unopened: false,
      },
      {
        id: 3,
        name: 'test',
        diary: 'test',
        unopened: false,
      },
    ],
  },
}
