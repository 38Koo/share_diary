import { Title } from '@storybook/blocks'
import { Meta, StoryObj } from '@storybook/react'
import { CalenderDateList } from '.'

export default {
  component: CalenderDateList,
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
} as Meta<typeof CalenderDateList>

type Story = StoryObj<typeof CalenderDateList>

export const Default: Story = {}
