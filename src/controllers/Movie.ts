import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import Movie from "../services/Movie";

const getAllMovies = async (req: Request, res: Response) => {
  const movies = await Movie.getAllMovies()

  return res.status(StatusCodes.OK).json({ message: movies })
}

export default {
  getAllMovies,
}
