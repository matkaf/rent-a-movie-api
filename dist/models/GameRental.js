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
const prismaClient_1 = __importDefault(require("../database/prismaClient"));
const luxon_1 = require("luxon");
const setReturnDate = () => {
    let date = luxon_1.DateTime.now();
    const isFriday = date.weekday == 5;
    if (isFriday) {
        return date.plus({ days: 3 }).toJSDate();
    }
    return date.plus({ days: 2 }).toJSDate();
};
const validateData = (games) => {
    const data = games.map((game) => {
        return Object.assign(Object.assign({}, game), { returnDate: setReturnDate() });
    });
    return data;
};
const createGameRental = (games) => __awaiter(void 0, void 0, void 0, function* () {
    const data = validateData(games);
    try {
        const res = yield prismaClient_1.default.gameRental.createMany({ data, skipDuplicates: true });
        return { created: true, message: res };
    }
    catch (error) {
        console.log(error);
        return { created: false, message: 'Erro ao criar!' };
    }
});
exports.default = {
    createGameRental,
};
