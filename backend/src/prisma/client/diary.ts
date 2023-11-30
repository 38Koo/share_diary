import { prisma } from ".";

type TRegisterDiary = {
  userId: number;
  year: number;
  month: number;
  day: number;
  contents: string;
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
