// 参考にした記事(https://chaika.hatenablog.com/entry/2021/08/30/083000)
// と記述方法が異なるが、既存の書き方だとログにエラーが出続けるので、
// issue(https://github.com/mswjs/msw/issues/1227)を参考に下記に変更
async function initMocks() {
  if (typeof window === 'undefined') {
    const { server } = await import('./server')
    server.listen()
  } else {
    const { worker } = await import('./browser')
    worker.start()
  }
}

export { initMocks }
