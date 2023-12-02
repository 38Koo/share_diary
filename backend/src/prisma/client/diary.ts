import { prisma } from ".";
type TFindDiaries = {
  userId: number;
  year: number;
  month: number;
  day: number;
};

type TRegisterDiary = {
  userId: number;
  year: number;
  month: number;
  day: number;
  contents: string;
};

export const diariesListByDay = async ({
  userId,
  year,
  month,
  day,
}: TFindDiaries) => {
  return await prisma.diary.findMany({
    where: {
      year: year,
      month: month,
      day: day,
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
};

export const findPostedUsersByMonth = async ({
  userId,
  year,
  month,
}: Omit<TFindDiaries, "day">) => {
  const postedDate = await prisma.diary.groupBy({
    by: ["day"],
    where: {
      year: year,
      month: month,
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

  return await Promise.all(
    postedDate.map(async (day) => {
      return await prisma.diary.findMany({
        where: {
          day: day.day,
          year: year,
          month: month,
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
  year,
  month,
  day,
  contents,
}: TRegisterDiary) => {
  const checkAlreadyExist = await prisma.diary.findUnique({
    where: {
      year_month_day_userId: {
        userId,
        year,
        month,
        day,
      },
    },
  });

  if (checkAlreadyExist) {
    return await prisma.diary.update({
      data: {
        contents: contents,
      },
      where: {
        year_month_day_userId: {
          userId,
          year,
          month,
          day,
        },
      },
    });
  }

  return await prisma.diary.create({
    data: {
      userId,
      year,
      month,
      day,
      contents,
    },
  });
};
