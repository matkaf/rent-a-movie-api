"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const GameRental_1 = __importDefault(require("../services/GameRental"));
const createGameRental = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { games } = req.body;
    if (!games)
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST);
    const rental = yield GameRental_1.default.createGameRental(games);
    if (!rental.created)
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST);
    return res.status(http_status_codes_1.StatusCodes.OK).json(rental.message);
});
exports.default = {
    createGameRental,
};
