"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesRepository = void 0;
const Role_1 = require("../entities/Role");
const typeorm_1 = require("@/shared/typeorm");
class RolesRepository {
    // para garantir que sera usado em mais nenhum lugar a instancia de new desta classe usa-se o private
    constructor() {
        this.repository = typeorm_1.dataSource.getRepository(Role_1.Role);
    }
    /**
     * Metodo no padrao singleton
  
    public static getIntance(): RolesRepository {
      if (!RolesRepository.INSTANCE) {
        RolesRepository.INSTANCE = new RolesRepository()
      }
      return RolesRepository.INSTANCE
    }
    */
    async create({ name }) {
        const role = this.repository.create({ name });
        return this.repository.save(role);
    }
    async save(role) {
        return this.repository.save(role);
    }
    async delete(role) {
        await await this.repository.remove(role);
    }
    async findAll({ page, skip, take }) {
        const [roles, count] = await this.repository.createQueryBuilder()
            .skip(skip)
            .take(take)
            .getManyAndCount();
        return {
            per_page: take,
            total: count,
            current_page: page,
            data: roles,
        };
    }
    async findByName(name) {
        return this.repository.findOneBy({ name });
    }
    async findById(id) {
        return this.repository.findOneBy({ id });
    }
}
exports.RolesRepository = RolesRepository;
//# sourceMappingURL=RolesRepository.js.map