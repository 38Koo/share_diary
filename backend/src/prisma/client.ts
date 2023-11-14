import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type TCreateUser = {
  name: string;
  email: string;
};

type TFindUser = {
  email: string;
};

export const createUser = async ({ name, email }: TCreateUser) => {
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
