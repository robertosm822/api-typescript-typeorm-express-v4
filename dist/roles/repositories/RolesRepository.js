"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesRepository = void 0;
const Role_1 = require("../entities/Role");
class RolesRepository {
    // para garantir que sera usado em mais nenhum lugar a instancia de new desta classe usa-se o private
    constructor() {
        this.roles = [];
        this.roles = [];
    }
    /**
     * Metodo no padrao singleton
    */
    static getIntance() {
        if (!RolesRepository.INSTANCE) {
            RolesRepository.INSTANCE = new RolesRepository();
        }
        return RolesRepository.INSTANCE;
    }
    create({ name }) {
        const role = new Role_1.Role();
        Object.assign(role, {
            name,
            created_at: new Date(),
        });
        this.roles.push(role);
        return role;
    }
    findAll() {
        return this.roles;
    }
    findByName(name) {
        return this.roles.find(role => role.name === name);
    }
}
exports.RolesRepository = RolesRepository;
//# sourceMappingURL=RolesRepository.js.map