"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListRolesUseCase = void 0;
class ListRolesUseCase {
    constructor(rolesRepository) {
        this.rolesRepository = rolesRepository;
    }
    execute() {
        return this.rolesRepository.findAll();
    }
}
exports.ListRolesUseCase = ListRolesUseCase;
//# sourceMappingURL=ListRolesUseCase.js.map