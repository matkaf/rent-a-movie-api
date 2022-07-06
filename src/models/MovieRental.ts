import prisma from "../database/prismaClient";
import { DateTime } from "luxon";

import { IMovie } from '../interfaces'

const setReturnDate = () => {
  let date = DateTime.now()
  const isFriday = date.weekday == 5
  
  if (isFriday) {
   return date.plus({ days: 3 }).toJSDate()
  } 

  return date.plus({ days: 2 }).toJSDate()
}

const validateData = (movies: IMovie[]) => {
  const data = movies.map((movie) => {
    return { ...movie, returnDate: setReturnDate() }
  })

  return data
}

const createMovieRental = async (movies: IMovie[]) => {
  const data = validateData(movies)
  
  try {
    const res = await prisma.movieRental.createMany({ data, skipDuplicates: true })

    return { created: true, message: res }
    
  } catch (error) {
    console.log(error);
    return { created: false, message: 'Erro ao criar!' }
  }
}

export default {
  createMovieRental,
}