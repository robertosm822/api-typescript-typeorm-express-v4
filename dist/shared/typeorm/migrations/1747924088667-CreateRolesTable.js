"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRolesTable1747924088667 = void 0;
const typeorm_1 = require("typeorm");
class CreateRolesTable1747924088667 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'roles',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                },
                {
                    name: 'name',
                    type: 'string',
                    isUnique: true,
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
        await queryRunner.dropTable('roles');
    }
}
exports.CreateRolesTable1747924088667 = CreateRolesTable1747924088667;
//# sourceMappingURL=1747924088667-CreateRolesTable.js.map