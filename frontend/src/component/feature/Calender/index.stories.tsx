import { Title } from '@storybook/blocks'
import { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'
import { Calender } from '.'

export default {
  component: Calender,
  tags: ['autodocs'],
  parameters: {
    docs: {
      pages: () => <Title>/</Title>,
    },
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as Meta<typeof Calender>

type Story = StoryObj<typeof Calender>

export const Default: Story = {}
