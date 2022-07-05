import MovieRental from "../models/MovieRental";

const createMovieRental = async (movieId: number, userId: number) => {
  const rental = await MovieRental.createMovieRental(movieId, userId)

  return rental
}

export default {
  createMovieRental,
}
