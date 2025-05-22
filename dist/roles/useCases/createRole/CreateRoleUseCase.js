"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRoleUseCase = void 0;
const AppError_1 = require("@/shared/errors/AppError");
class CreateRoleUseCase {
    constructor(rolesRepository) {
        this.rolesRepository = rolesRepository;
    }
    execute({ name }) {
        const roleAlreadyExists = this.rolesRepository.findByName(name);
        if (roleAlreadyExists) {
            throw new AppError_1.AppError('Role already exists');
        }
        return this.rolesRepository.create({ name });
    }
}
exports.CreateRoleUseCase = CreateRoleUseCase;
//# sourceMappingURL=CreateRoleUseCase.js.map