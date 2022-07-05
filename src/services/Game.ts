import Game from "../models/Game"

const getAllGames = async () => {
  const games = await Game.getAllGames()

  return games
}

export default {
  getAllGames,
}
