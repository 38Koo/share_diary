import { prisma } from ".";
type TFindDiaries = {
  userId: number;
  date: string;
};

type TRegisterDiary = {
  userId: number;
  date: string;
  contents: string;
};

export const diariesListByDay = async ({ userId, date }: TFindDiaries) => {
  return await prisma.diary.findMany({
    where: {
      date: date,
      user: {
        OR: [
          { id: userId },
          {
            following: {
              some: {
                followedById: userId,
                status: "APPROVED",
              },
            },
          },
        ],
      },
    },
    include: {
      user: true,
    },
  });
};

export const findPostedUsersByMonth = async ({
  userId,
  date,
}: Omit<TFindDiaries, "day">) => {
  const postedDate = await prisma.diary.findMany({
    where: {
      date: {
        startsWith: date.substring(0, 6),
      },
      user: {
        OR: [
          { id: userId },
          {
            following: {
              some: {
                followedById: userId,
                status: "APPROVED",
              },
            },
          },
        ],
      },
    },
  });

  return postedDate;

  //FIXME:
  return await Promise.all(
    postedDate.map(async (day) => {
      return await prisma.diary.findMany({
        where: {
          date: date,
          user: {
            OR: [
              { id: userId },
              {
                following: {
                  some: {
                    followedById: userId,
                    status: "APPROVED",
                  },
                },
              },
            ],
          },
        },
        take: 2,
        orderBy: {
          id: "asc",
        },
      });
    })
  );
};

export const registerDiary = async ({
  userId,
  date,
  contents,
}: TRegisterDiary) => {
  const checkAlreadyExist = await prisma.diary.findUnique({
    where: {
      date_userId: {
        userId,
        date,
      },
    },
  });

  if (checkAlreadyExist) {
    return await prisma.diary.update({
      data: {
        contents: contents,
      },
      where: {
        date_userId: {
          userId,
          date,
        },
      },
    });
  }

  return await prisma.diary.create({
    data: {
      userId,
      date,
      contents,
    },
  });
};
