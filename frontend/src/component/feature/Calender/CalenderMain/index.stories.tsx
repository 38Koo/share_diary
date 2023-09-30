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
  decorators: [
    (Story) => (
      <div className='w-[676px] border border-solid border-black'>
        <Story year={2023} month={9} date={26} />
      </div>
    ),
  ],
} as Meta<typeof CalenderMain>

type Story = StoryObj<typeof CalenderMain>

export const Default: Story = {}