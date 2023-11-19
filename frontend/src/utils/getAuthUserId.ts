export const getAuthUser = async (
  email: string,
) => {
  const userResponse = await fetch(
    `http://localhost:4000/api/check/users?email=${email}`,
  )

  const user = await userResponse.json()

  console.log(user)
  return user
}
