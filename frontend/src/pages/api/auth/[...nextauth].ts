import NextAuth, {
  NextAuthOptions,
} from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const authConfig = {
  providers: [
    GoogleProvider({
      clientId:
        process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret:
        process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async signIn(user) {
      const existingUserResponse = await fetch(
        `http://localhost:4000/api/check/user?email=${user.user.email}`,
      )

      const existingUser =
        await existingUserResponse.json()

      // FIXME: ここでコンテキストにuser情報格納した方が良さそう
      if (existingUser) {
        return true
      } else {
        const newUserResponse = await fetch(
          'http://localhost:4000/api/register/users',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: user.user.name,
              email: user.user.email,
            }),
          },
        )
        const newUser =
          await newUserResponse.json()

        return !!newUser
      }
    },
    async redirect({ baseUrl }) {
      return baseUrl
    },
  },
} satisfies NextAuthOptions

export default NextAuth(authConfig)
