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
