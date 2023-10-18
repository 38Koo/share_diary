import '../styles/globals.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import type { AppProps } from 'next/app'

import { Provider } from 'react-redux'
import { store } from '../redux/store'

export default function App({
  Component,
  pageProps,
}: AppProps) {
  if (process.env.NODE_ENV === 'development') {
    const MockServer = () =>
      import('../mocks/worker')

    MockServer()
  }

  const queryClient = new QueryClient()

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  )
}
