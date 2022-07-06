import prisma from "../database/prismaClient";
import { DateTime } from "luxon";

import { IGame } from '../interfaces'

const setReturnDate = () => {
  let date = DateTime.now()
  const isFriday = date.weekday == 5
  
  if (isFriday) {
   return date.plus({ days: 3 }).toJSDate()
  } 

  return date.plus({ days: 2 }).toJSDate()
}

const validateData = (games: IGame[]) => {
  const data = games.map((game) => {
    return { ...game, returnDate: setReturnDate() }
  })

  return data
}

const createGameRental = async (games: IGame[]) => {
  const data = validateData(games)
  
  try {
    const res = await prisma.gameRental.createMany({ data })

    return { created: true, message: res }
    
  } catch (error) {
    console.log(error);
    return { created: false, message: 'Erro ao criar!' }
  }
}

export default {
  createGameRental,
}