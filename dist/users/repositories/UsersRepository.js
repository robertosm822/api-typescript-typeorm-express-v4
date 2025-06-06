"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const typeorm_1 = require("@/shared/typeorm");
const User_1 = require("@/users/entities/User");
class UsersRepository {
    constructor() {
        this.repository = typeorm_1.dataSource.getRepository(User_1.User);
    }
    async create({ name, email, password, isAdmin, role, }) {
        const user = this.repository.create({
            name,
            email,
            password,
            isAdmin,
            role,
        });
        return this.repository.save(user);
    }
    async save(user) {
        return this.repository.save(user);
    }
    async findAll({ page, skip, take, }) {
        const [users, count] = await this.repository
            .createQueryBuilder('r')
            .leftJoinAndSelect('r.role', 'role')
            .skip(skip)
            .take(take)
            .getManyAndCount();
        const result = {
            per_page: take,
            total: count,
            current_page: page,
            data: users,
        };
        return result;
    }
    async findById(id) {
        return this.repository.findOneBy({ id });
    }
    async findByName(name) {
        return this.repository.findOneBy({ name });
    }
    async findByEmail(email) {
        return this.repository.findOneBy({ email });
    }
    async delete(user) {
        await this.repository.remove(user);
    }
}
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=UsersRepository.js.map