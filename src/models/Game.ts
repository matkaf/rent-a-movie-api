import prisma from "../database/prismaClient";

const getAllGames = async () => {
  const games = await prisma.game.findMany()

  return games
}

export default {
  getAllGames,
}
