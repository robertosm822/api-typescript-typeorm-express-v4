"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRoleUseCase = void 0;
const AppError_1 = require("@/shared/errors/AppError");
const tsyringe_1 = require("tsyringe");
let UpdateRoleUseCase = class UpdateRoleUseCase {
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
        if (roleWithSameName && role.name !== roleWithSameName.name) {
            throw new AppError_1.AppError('Role name not informed or already in use');
        }
        role.name = name;
        return this.rolesRepository.save(role);
    }
};
exports.UpdateRoleUseCase = UpdateRoleUseCase;
exports.UpdateRoleUseCase = UpdateRoleUseCase = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('RolesRepository')),
    __metadata("design:paramtypes", [Object])
], UpdateRoleUseCase);
//# sourceMappingURL=UpdateRoleUseCase.js.map