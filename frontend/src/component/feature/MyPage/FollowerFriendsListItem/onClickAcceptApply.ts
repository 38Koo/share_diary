import { handleAcceptArgs } from './onClickDenyApply'

export const onClickAcceptApply = async ({
  userId,
  followedById,
  setIsPending,
}: handleAcceptArgs) => {
  try {
    const acceptApply = await fetch(
      'http://localhost:4000/api/accept/apply',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId,
          followedById: followedById,
        }),
      },
    )

    if (acceptApply.status === 200)
      setIsPending(false)
  } catch (e) {
    console.error(e)
  }
}
