import User from "../models/User";

const findUser = async (email: string, password: string) => {
  const user = await User.findUser(email)

  if (!user) return { found: false, message: 'E-mail não encontrado' }

  const wrongPassword = user.password !== password;

  if (wrongPassword) return { found: false, message: 'Senha incorreta' }

  return { found: true, message:  { id: user.id, name: user.name } }
}

export default {
  findUser,
}