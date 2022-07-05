import prisma from "../database/prismaClient";

const findUser = async (email: string) => {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
    select: {
      id: true,
      email: true,
      password: true,
      name: true,
    }
  });

  return user;
}

export default {
  findUser,
}