import { prisma } from ".";

type TApplyForFollow = {
  userId: number;
  followedById: number;
};

export const ApplyForFollow = async ({
  userId,
  followedById,
}: TApplyForFollow) => {
  const existCheck = await prisma.follower.findUnique({
    where: {
      userId_followedById: {
        userId,
        followedById,
      },
    },
  });

  if (existCheck !== null) {
    return null;
  }

  return await prisma.follower.create({
    data: {
      userId: userId,
      followedById: followedById,
      status: "PENDING",
    },
  });
};
