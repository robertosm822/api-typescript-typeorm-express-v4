"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rolesRouter = void 0;
const express_1 = require("express");
const celebrate_1 = require("celebrate");
const tsyringe_1 = require("tsyringe");
const ListRolesController_1 = require("@/roles/useCases/listRoles/ListRolesController");
const ShowRoleController_1 = require("@/roles/useCases/showRole/ShowRoleController");
const CreateRoleController_1 = require("@/roles/useCases/createRole/CreateRoleController");
const UpdateRoleController_1 = require("@/roles/useCases/updateRole/UpdateRoleController");
const DeleteRoleController_1 = require("@/roles/useCases/deleteRole/DeleteRoleController");
const rolesRouter = (0, express_1.Router)();
exports.rolesRouter = rolesRouter;
const listRolesController = tsyringe_1.container.resolve(ListRolesController_1.ListRolesController);
const showRolesController = tsyringe_1.container.resolve(ShowRoleController_1.ShowRoleController);
const createRolesController = tsyringe_1.container.resolve(CreateRoleController_1.CreateRoleController);
const updateRolesController = tsyringe_1.container.resolve(UpdateRoleController_1.UpdateRoleController);
const deleteRolesController = tsyringe_1.container.resolve(DeleteRoleController_1.DeleteRoleController);
/* @ts-ignore */
rolesRouter.get('/', (request, response) => {
    return listRolesController.handle(request, response);
});
rolesRouter.get('/:id', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: celebrate_1.Joi.object().keys({
        id: celebrate_1.Joi.string().uuid().required(),
    })
    /* @ts-ignore */
}), (request, response) => {
    return showRolesController.handle(request, response);
});
rolesRouter.post('/', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: celebrate_1.Joi.object().keys({
        name: celebrate_1.Joi.string().required(),
    })
    /* @ts-ignore */
}), (request, response) => {
    return createRolesController.handle(request, response);
});
rolesRouter.put('/:id', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: celebrate_1.Joi.object().keys({
        name: celebrate_1.Joi.string().required(),
    })
}), (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: celebrate_1.Joi.object().keys({
        id: celebrate_1.Joi.string().uuid().required(),
    })
    /* @ts-ignore */
}), (request, response) => {
    return updateRolesController.handle(request, response);
});
/* @ts-ignore */
rolesRouter.delete('/:id', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: celebrate_1.Joi.object().keys({
        id: celebrate_1.Joi.string().uuid().required(),
    })
    /* @ts-ignore */
}), (request, response) => {
    return deleteRolesController.handle(request, response);
});
//# sourceMappingURL=roles.routes.js.map