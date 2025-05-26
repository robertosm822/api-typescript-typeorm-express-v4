"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsersTable1748283713791 = void 0;
const typeorm_1 = require("typeorm");
class CreateUsersTable1748283713791 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                },
                {
                    name: 'name',
                    type: 'string',
                },
                {
                    name: 'email',
                    type: 'string',
                    isUnique: true,
                },
                {
                    name: 'password',
                    type: 'string',
                },
                {
                    name: 'avatar',
                    type: 'string',
                    isNullable: true,
                },
                {
                    name: 'isAdmin',
                    type: 'boolean',
                    default: false,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('users');
    }
}
exports.CreateUsersTable1748283713791 = CreateUsersTable1748283713791;
//# sourceMappingURL=1748283713791-CreateUsersTable.js.map