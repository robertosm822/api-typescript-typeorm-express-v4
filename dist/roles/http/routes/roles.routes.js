"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rolesRouter = void 0;
const createRole_1 = require("@/roles/useCases/createRole");
const listRoles_1 = require("@/roles/useCases/listRoles");
const showRole_1 = require("@/roles/useCases/showRole");
const updateRole_1 = require("@/roles/useCases/updateRole");
const express_1 = require("express");
const rolesRouter = (0, express_1.Router)();
exports.rolesRouter = rolesRouter;
/* @ts-ignore */
rolesRouter.get('/roles', (request, response) => {
    return listRoles_1.listRolesController.handle(request, response);
});
/* @ts-ignore */
rolesRouter.get('/roles/:id', (request, response) => {
    return showRole_1.showRolesController.handle(request, response);
});
/* @ts-ignore */
rolesRouter.post('/roles', (request, response) => {
    return createRole_1.createRolesController.handle(request, response);
});
/* @ts-ignore */
rolesRouter.put('/roles/:id', (request, response) => {
    return updateRole_1.updateRolesController.handle(request, response);
});
//# sourceMappingURL=roles.routes.js.map