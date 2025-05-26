"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const RolesRepository_1 = require("../repositories/RolesRepository");
const CreateRoleController_1 = require("../useCases/createRole/CreateRoleController");
const ListRolesController_1 = require("../useCases/listRoles/ListRolesController");
const ShowRoleController_1 = require("../useCases/showRole/ShowRoleController");
const UpdateRoleController_1 = require("../useCases/updateRole/UpdateRoleController");
const DeleteRoleController_1 = require("../useCases/deleteRole/DeleteRoleController");
tsyringe_1.container.registerSingleton('RolesRepository', RolesRepository_1.RolesRepository);
tsyringe_1.container.registerSingleton('CreateRoleController', CreateRoleController_1.CreateRoleController);
tsyringe_1.container.registerSingleton('ListRolesController', ListRolesController_1.ListRolesController);
tsyringe_1.container.registerSingleton('ShowRoleController', ShowRoleController_1.ShowRoleController);
tsyringe_1.container.registerSingleton('UpdateRoleController', UpdateRoleController_1.UpdateRoleController);
tsyringe_1.container.registerSingleton('DeleteRoleController', DeleteRoleController_1.DeleteRoleController);
//# sourceMappingURL=index.js.map