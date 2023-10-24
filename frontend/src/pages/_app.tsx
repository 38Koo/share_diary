import '../styles/globals.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import type { AppProps } from 'next/app'

import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

export default function App({
  Component,
  pageProps,
}: AppProps) {
  const [shouldRender, setShouldRender] =
    useState(false)

  // NOTE: MSWの初期化前にReactQueryの初回fetchが走ってしまい、うまくAPIと連携できないので
  // MSWの初期化を待ってからレンダリングを開始する
  // https://github.com/mswjs/msw/discussions/1049#discussioncomment-1941348
  useEffect(() => {
    async function startMockServer() {
      const { initMocks } = await import(
        '../mocks/worker'
      )
      await initMocks()
      setShouldRender(true)
    }

    if (process.env.NODE_ENV === 'development') {
      startMockServer()
    }
  }, [])

  if (!shouldRender) {
    return null
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
