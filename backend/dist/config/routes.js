"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("../database/database"));
const routes = (0, express_1.default)();
routes.get('/', (req, res, next) => {
    return res.json(database_1.default);
});
module.exports = routes;
