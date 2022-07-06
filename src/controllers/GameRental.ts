import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import GameRental from "../services/GameRental";

const createGameRental = async (req: Request, res: Response) => {
  const { games } = req.body

  const rental = await GameRental.createGameRental(games)

  if (!rental.created) return res.status(StatusCodes.BAD_REQUEST)

  return res.status(StatusCodes.OK).json(rental.message)
}

export default {
  createGameRental,
}
