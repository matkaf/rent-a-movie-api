import express from 'express';
import { StatusCodes } from 'http-status-codes';

import Game from './controllers/Game';
import Movie from './controllers/Movie';
import MovieRental from './controllers/MovieRental';
import User from './controllers/User';

const app = express();

app.use(express.json());

const PORT = 3001;

app.get('/', (_req, res) => {
  res.status(StatusCodes.OK).send('API funcionando!')
});

app.get('/login', User.findUser)

app.get('/movies', Movie.getAllMovies)

app.post('/movies', MovieRental.createMovieRental)

app.get('/games', Game.getAllGames)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});