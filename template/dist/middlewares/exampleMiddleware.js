"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exampleMiddleware = void 0;
function exampleMiddleware(req, res, next) {
    const authHeader = req.headers["auth"];
    if (authHeader === "joe") {
        next();
    }
    else {
        res.status(400).send("Forbidden");
    }
}
exports.exampleMiddleware = exampleMiddleware;
//# sourceMappingURL=exampleMiddleware.js.map