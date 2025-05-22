"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListRolesUseCase = void 0;
class ListRolesUseCase {
    constructor(rolesRepository) {
        this.rolesRepository = rolesRepository;
    }
    async execute({ page, limit }) {
        const take = limit;
        const skip = (Number(page) - 1) * take;
        return this.rolesRepository.findAll({ page, skip, take });
    }
}
exports.ListRolesUseCase = ListRolesUseCase;
//# sourceMappingURL=ListRolesUseCase.js.map