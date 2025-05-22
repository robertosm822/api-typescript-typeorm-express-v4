"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRolesController = void 0;
const RolesRepository_1 = require("@/roles/repositories/RolesRepository");
const CreateRoleUseCase_1 = require("./CreateRoleUseCase");
const CreateRoleController_1 = require("./CreateRoleController");
const rolesRepository = RolesRepository_1.RolesRepository.getIntance();
const createRoleUseCase = new CreateRoleUseCase_1.CreateRoleUseCase(rolesRepository);
exports.createRolesController = new CreateRoleController_1.CreateRoleController(createRoleUseCase);
//# sourceMappingURL=index.js.map