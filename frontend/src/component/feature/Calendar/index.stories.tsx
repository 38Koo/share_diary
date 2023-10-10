import { Title } from '@storybook/blocks'
import { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'
import { Calendar } from '.'

export default {
  component: Calendar,
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
} as Meta<typeof Calendar>

type Story = StoryObj<typeof Calendar>

export const Default: Story = {}
