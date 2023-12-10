export const fetchFollowerFriendsList = async (
  userId: number,
) => {
  const friendsDataResponse = await fetch(
    `http://localhost:4000/api/find/followers?userId=${userId}`,
  )

  const friendsData =
    await friendsDataResponse.json()

  return friendsData
}
