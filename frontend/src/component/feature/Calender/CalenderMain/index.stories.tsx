import { Title } from '@storybook/blocks'
import { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'
import { store } from '../../../../redux/store'
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
      <Provider store={store}>
        <div className='w-[676px] border border-solid border-black'>
          <Story
            year={2023}
            month={10}
            date={26}
          />
        </div>
      </Provider>
    ),
  ],
} as Meta<typeof CalenderMain>

type Story = StoryObj<typeof CalenderMain>

export const Default: Story = {}
