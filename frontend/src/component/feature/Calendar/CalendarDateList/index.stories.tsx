import { Title } from '@storybook/blocks'
import { Meta, StoryObj } from '@storybook/react'
import { CalendarDateList } from '.'

export default {
  component: CalendarDateList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      pages: () => <Title></Title>,
    },
  },
  decorators: [
    (Story) => (
      <div className='w-[674px]'>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof CalendarDateList>

type Story = StoryObj<typeof CalendarDateList>

export const Default: Story = {}
