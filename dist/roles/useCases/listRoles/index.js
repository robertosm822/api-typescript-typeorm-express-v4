"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listRolesController = void 0;
const RolesRepository_1 = require("@/roles/repositories/RolesRepository");
const ListRolesUseCase_1 = require("./ListRolesUseCase");
const ListRolesController_1 = require("./ListRolesController");
const rolesRepository = RolesRepository_1.RolesRepository.getIntance();
const listRolesUseCase = new ListRolesUseCase_1.ListRolesUseCase(rolesRepository);
exports.listRolesController = new ListRolesController_1.ListRolesController(listRolesUseCase);
//# sourceMappingURL=index.js.map