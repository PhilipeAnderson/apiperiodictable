"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = __importDefault(require());
const module_2 = __importDefault(require());
module_1.default.get('/', (req, res, next) => {
    return res.json(module_2.default);
});
module.exports = module_1.default;
