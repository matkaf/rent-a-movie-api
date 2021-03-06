import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import MovieRental from "../services/MovieRental";

const createMovieRental = async (req: Request, res: Response) => {
  const { movies } = req.body

  const rental = await MovieRental.createMovieRental(movies)

  if (!rental.created) return res.status(StatusCodes.BAD_REQUEST)

  return res.status(StatusCodes.OK).json(rental.message)
}

export default {
  createMovieRental,
}
