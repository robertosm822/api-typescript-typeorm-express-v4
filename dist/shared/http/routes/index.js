"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const routes = (0, express_1.Router)();
exports.routes = routes;
/* @ts-ignore */
routes.get('/', (request, response) => {
    // throw new AppError("Acesso negado", 401);
    return response.status(200).json({
        message: "Ok"
    });
});
//# sourceMappingURL=index.js.map