import Movie from "../models/Movie"

const getAllMovies = async () => {
  const movies = await Movie.getAllMovies()

  return movies
}

export default {
  getAllMovies,
}