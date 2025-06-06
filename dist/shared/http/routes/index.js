"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const roles_routes_1 = require("@/roles/http/routes/roles.routes");
const users_routes_1 = require("@/users/http/users.routes");
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
routes.use('/roles', roles_routes_1.rolesRouter);
routes.use('/users', users_routes_1.userRouter);
//# sourceMappingURL=index.js.map