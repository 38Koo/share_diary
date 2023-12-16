import { useSession } from 'next-auth/react'
import React, {
  ReactNode,
  useEffect,
  useState,
} from 'react'

export type User = {
  id: number
  name: string
  email: string
  accountId: string
}

export const AuthUserContext =
  React.createContext<User | null>(null)

export const AuthUserProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [user, setUser] = useState<User | null>(
    null,
  )
  const { data } = useSession()

  useEffect(() => {
    if (!data) return
    const fetchUser = async () => {
      const authUserResponse = await fetch(
        `http://localhost:4000/api/check/user?email=${
          data?.user?.email ?? ''
        }`,
      )

      const authUser =
        (await authUserResponse.json()) as User

      setUser(authUser)
    }

    fetchUser()
  }, [data])

  return (
    <AuthUserContext.Provider value={user}>
      {children}
    </AuthUserContext.Provider>
  )
}
