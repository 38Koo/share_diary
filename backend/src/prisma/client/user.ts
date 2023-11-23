import { prisma } from ".";
import crypto from "crypto";

type TCreateUser = {
  name: string;
  email: string;
};

type TFindUser = {
  email: string;
  accountId: string;
};

export const registerUser = async ({ name, email }: TCreateUser) => {
  let accountId;

  // アカウントIDが重複しないように制御
  do {
    accountId = crypto.randomBytes(16).toString("hex");
  } while (await prisma.user.findUnique({ where: { accountId: accountId } }));

  return await prisma.user.create({
    data: {
      name,
      email,
      accountId,
    },
  });
};

export const findUserByEmail = async ({ email }: Partial<TFindUser>) => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
};

export const findUserByAccountId = async ({
  accountId,
}: Partial<TFindUser>) => {
  return await prisma.user.findUnique({
    where: {
      accountId: accountId ?? "",
    },
  });
};
