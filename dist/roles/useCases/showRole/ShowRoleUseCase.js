"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowRoleUseCase = void 0;
const AppError_1 = require("@/shared/errors/AppError");
class ShowRoleUseCase {
    constructor(rolesRepository) {
        this.rolesRepository = rolesRepository;
    }
    async execute({ id }) {
        const role = await this.rolesRepository.findById(id);
        if (!role) {
            throw new AppError_1.AppError('Role not found', 404);
        }
        return role;
    }
}
exports.ShowRoleUseCase = ShowRoleUseCase;
//# sourceMappingURL=ShowRoleUseCase.js.map