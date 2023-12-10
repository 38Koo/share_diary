import { prisma } from ".";

type TApplyForFollow = {
  userId: number;
  followId: number;
};

export const ApplyForFollow = async ({ userId, followId }: TApplyForFollow) => {
  const existCheck = await prisma.follower.findUnique({
    where: {
      userId_followedById: {
        userId: followId,
        followedById: userId,
      },
    },
    select: {
      followedById: true,
    },
  });

  if (existCheck !== null) {
    return null;
  }

  return await prisma.follower.create({
    data: {
      userId: followId,
      followedById: userId,
      status: "PENDING",
    },
  });
};

export const FindFollowUsers = async (userId: number) => {
  return await prisma.follower.findMany({
    where: {
      followedById: userId,
      status: "APPROVED",
    },
    include: {
      user: true,
    },
  });
};

export const FindFollowers = async (userId: number) => {
  return await prisma.follower.findMany({
    where: {
      userId: userId,
    },
    include: {
      followedBy: true,
    },
  });
};
