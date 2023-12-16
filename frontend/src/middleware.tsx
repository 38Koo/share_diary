import { withAuth } from 'next-auth/middleware'

export default withAuth({
  callbacks: {
    authorized: ({ token }) => {
      return !!token
    },
  },
  pages: {
    signIn: '/authcheck',
  },
})

export const config = {
  matcher:
    '/((?!api|_next/static|_next/image|favicon.ico|authcheck|mockServiceWorker).*)',
}
