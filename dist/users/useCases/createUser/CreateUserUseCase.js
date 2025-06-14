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
exports.CreateUserUseCase = void 0;
const tsyringe_1 = require("tsyringe");
const bcryptjs_1 = require("bcryptjs");
const AppError_1 = require("@/shared/errors/AppError");
let CreateUserUseCase = class CreateUserUseCase {
    constructor(usersRepository, rolesRepository) {
        this.usersRepository = usersRepository;
        this.rolesRepository = rolesRepository;
    }
    async execute({ name, email, password, isAdmin, roleId }) {
        //verificar se existe o user
        const emailExists = await this.usersRepository.findByEmail(email);
        if (emailExists) {
            throw new AppError_1.AppError("Email already used");
        }
        const role = await this.rolesRepository.findById(roleId);
        if (!role) {
            throw new AppError_1.AppError("Role not found", 404);
        }
        const hashedPassword = await (0, bcryptjs_1.hash)(password, 10);
        const user = await this.usersRepository.create({
            name,
            email,
            password: hashedPassword,
            isAdmin,
            role
        });
        return user;
    }
};
exports.CreateUserUseCase = CreateUserUseCase;
exports.CreateUserUseCase = CreateUserUseCase = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('UsersRepository')),
    __param(1, (0, tsyringe_1.inject)('RolesRepository')),
    __metadata("design:paramtypes", [Object, Object])
], CreateUserUseCase);
//# sourceMappingURL=CreateUserUseCase.js.map