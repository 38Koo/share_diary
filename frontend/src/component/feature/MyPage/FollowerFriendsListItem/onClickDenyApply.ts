import { Dispatch, SetStateAction } from 'react'

export type handleAcceptArgs = {
  userId: number
  followedById: number
  setIsPending: Dispatch<SetStateAction<boolean>>
}

export const onClickDenyApply = async ({
  userId,
  followedById,
  setIsPending,
}: handleAcceptArgs) => {
  try {
    const denyApply = await fetch(
      'http://localhost:4000/api/deny/apply',
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

    if (denyApply.status === 200)
      setIsPending(false)
  } catch (e) {
    console.error(e)
  }
}
