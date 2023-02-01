"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exampleRouter = void 0;
const express_1 = __importDefault(require("express"));
exports.exampleRouter = express_1.default.Router();
exports.exampleRouter.use(express_1.default.json());
exports.exampleRouter.get("/", (req, res) => {
    res.status(200).send("This is an example route.");
});
//# sourceMappingURL=example.js.map