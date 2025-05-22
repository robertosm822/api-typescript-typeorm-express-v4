"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showRolesController = void 0;
const RolesRepository_1 = require("@/roles/repositories/RolesRepository");
const ShowRoleController_1 = require("./ShowRoleController");
const ShowRoleUseCase_1 = require("./ShowRoleUseCase");
const rolesRepository = RolesRepository_1.RolesRepository.getIntance();
const showRoleUseCase = new ShowRoleUseCase_1.ShowRoleUseCase(rolesRepository);
exports.showRolesController = new ShowRoleController_1.ShowRoleController(showRoleUseCase);
//# sourceMappingURL=index.js.map