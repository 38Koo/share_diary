export const fetchFollowFriendsList = async (
  userId: number,
) => {
  const friendsDataResponse = await fetch(
    `http://localhost:4000/api/find/follows?userId=${userId}`,
  )

  const friendsData =
    await friendsDataResponse.json()

  return friendsData
}
