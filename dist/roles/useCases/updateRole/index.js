"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRolesController = void 0;
const RolesRepository_1 = require("@/roles/repositories/RolesRepository");
const UpdateRoleController_1 = require("./UpdateRoleController");
const UpdateRoleUseCase_1 = require("./UpdateRoleUseCase");
const rolesRepository = RolesRepository_1.RolesRepository.getIntance();
const updateRoleUseCase = new UpdateRoleUseCase_1.UpdateRoleUseCase(rolesRepository);
exports.updateRolesController = new UpdateRoleController_1.UpdateRoleController(updateRoleUseCase);
//# sourceMappingURL=index.js.map