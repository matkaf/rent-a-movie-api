import { IGame } from "../interfaces";
import GameRental from "../models/GameRental";

const createGameRental = async (games: IGame[]) => {
  const rental = await GameRental.createGameRental(games)

  return rental
}

export default {
  createGameRental,
}
