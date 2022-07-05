import prisma from "../database/prismaClient";

const getAllMovies = async () => {
  const movies = await prisma.movie.findMany()

  return movies
}

export default {
  getAllMovies,
}
