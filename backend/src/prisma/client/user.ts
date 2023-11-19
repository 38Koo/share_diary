import { prisma } from ".";

type TCreateUser = {
  name: string;
  email: string;
};

type TFindUser = {
  email: string;
};

export const registerUser = async ({ name, email }: TCreateUser) => {
  return await prisma.user.create({
    data: {
      name,
      email,
    },
  });
};

export const findUserByEmail = async ({ email }: TFindUser) => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
};
