export const getAuthUser = async (
  email: string,
) => {
  const userResponse = await fetch(
    `http://localhost:4000/api/check/user?email=${email}`,
  )

  const user = await userResponse.json()

  return user
}
