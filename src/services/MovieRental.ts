import { IMovie } from "../interfaces";
import MovieRental from "../models/MovieRental";

const createMovieRental = async (movies: IMovie[]) => {
  const rental = await MovieRental.createMovieRental(movies)

  return rental
}

export default {
  createMovieRental,
}
