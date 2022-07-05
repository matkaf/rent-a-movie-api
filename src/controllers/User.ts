import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import User from "../services/User";

const findUser = async (req: Request, res: Response) => {
  const { email, password } = req.body

  if (!email) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'A body request is required' })

  const { found, message } = await User.findUser(email, password)

  if (!found) return res.status(StatusCodes.BAD_REQUEST).json({ message })

  return res.status(StatusCodes.OK).json(message)
}

export default {
  findUser,
}