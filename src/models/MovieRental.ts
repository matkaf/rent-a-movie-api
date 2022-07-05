import prisma from "../database/prismaClient";
import { DateTime } from "luxon";

const setReturnDate = () => {
  let date = DateTime.now()
  const isFriday = date.weekday == 5
  
  if (isFriday) {
   return date.plus({ days: 3 }).toJSDate()
  } 

  return date.plus({ days: 2 }).toJSDate()
}

const createMovieRental = async (movieId: number, userId: number) => {
  try {
    const res = await prisma.movieRental.create({
      data: {
        movieId,
        userId,
        returnDate: setReturnDate(),
      }
    })

    return { created: true, message: res }
    
  } catch (error) {
    console.log(error);
    return { created: false, message: 'Erro ao criar!' }
  }
}

export default {
  createMovieRental,
}