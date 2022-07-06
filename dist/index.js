"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_status_codes_1 = require("http-status-codes");
const Game_1 = __importDefault(require("./controllers/Game"));
const GameRental_1 = __importDefault(require("./controllers/GameRental"));
const Movie_1 = __importDefault(require("./controllers/Movie"));
const MovieRental_1 = __importDefault(require("./controllers/MovieRental"));
const User_1 = __importDefault(require("./controllers/User"));
const origin = ['http://localhost:3000'];
const PORT = process.env.PORT || 3001;
const options = {
    origin,
};
const app = (0, express_1.default)();
app.use((0, cors_1.default)(options));
app.use(express_1.default.json());
app.get('/', (_req, res) => {
    res.status(http_status_codes_1.StatusCodes.OK).send('API funcionando!');
});
app.post('/login', User_1.default.findUser);
app.get('/movies', Movie_1.default.getAllMovies);
app.post('/movies', MovieRental_1.default.createMovieRental);
app.get('/games', Game_1.default.getAllGames);
app.post('/games', GameRental_1.default.createGameRental);
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
