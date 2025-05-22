"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRoleUseCase = void 0;
const AppError_1 = require("@/shared/errors/AppError");
class UpdateRoleUseCase {
    constructor(rolesRepository) {
        this.rolesRepository = rolesRepository;
    }
    async execute({ id, name }) {
        const role = await this.rolesRepository.findById(id);
        if (!role) {
            throw new AppError_1.AppError('Role not found', 404);
        }
        // verificar se existe algum com mesmo nome
        const roleWithSameName = await this.rolesRepository.findByName(name);
        if (roleWithSameName) {
            throw new AppError_1.AppError('Role name not informed or already in use');
        }
        role.name = name;
        return this.rolesRepository.save(role);
    }
}
exports.UpdateRoleUseCase = UpdateRoleUseCase;
//# sourceMappingURL=UpdateRoleUseCase.js.map