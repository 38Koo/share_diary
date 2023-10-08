import '../styles/globals.css'
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

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
