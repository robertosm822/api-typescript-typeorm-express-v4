"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddRoleIdToUsersTable1657997456404 = void 0;
const typeorm_1 = require("typeorm");
class AddRoleIdToUsersTable1657997456404 {
    async up(queryRunner) {
        await queryRunner.addColumn('users', new typeorm_1.TableColumn({
            name: 'roleId',
            type: 'uuid',
            isNullable: true,
        }));
        await queryRunner.createForeignKey('users', new typeorm_1.TableForeignKey({
            name: 'UsersRoles',
            columnNames: ['roleId'],
            referencedTableName: 'roles',
            referencedColumnNames: ['id'],
            onDelete: 'SET NULL',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey('users', 'UsersRoles');
        await queryRunner.dropColumn('users', 'roleId');
    }
}
exports.AddRoleIdToUsersTable1657997456404 = AddRoleIdToUsersTable1657997456404;
//# sourceMappingURL=1657997456404-AddRoleIdToUsersTable.js.map