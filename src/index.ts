import express from 'express';
import cors from 'cors';

import { StatusCodes } from 'http-status-codes';

import Game from './controllers/Game';
import Movie from './controllers/Movie';
import MovieRental from './controllers/MovieRental';
import User from './controllers/User';

const origin = ['http://localhost:3000']

const options: cors.CorsOptions = {
  origin,
}

const app = express();

app.use(cors(options));

app.use(express.json());

const PORT = 3001;

app.get('/', (_req, res) => {
  res.status(StatusCodes.OK).send('API funcionando!')
});

app.post('/login', User.findUser)

app.get('/movies', Movie.getAllMovies)

app.post('/movies', MovieRental.createMovieRental)

app.get('/games', Game.getAllGames)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});