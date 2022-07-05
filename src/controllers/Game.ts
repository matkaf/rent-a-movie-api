import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import Game from "../services/Game";

const getAllGames = async (req: Request, res: Response) => {
  const games = await Game.getAllGames()

  return res.status(StatusCodes.OK).json({ message: games })
}

export default {
  getAllGames,
}
