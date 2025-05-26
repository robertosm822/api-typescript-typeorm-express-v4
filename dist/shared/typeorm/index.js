"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const typeorm_1 = require("typeorm");
const _1747924088667_CreateRolesTable_1 = require("./migrations/1747924088667-CreateRolesTable");
const Role_1 = require("../../roles/entities/Role");
const _1748283713791_CreateUsersTable_1 = require("./migrations/1748283713791-CreateUsersTable");
const _1657997456404_AddRoleIdToUsersTable_1 = require("./migrations/1657997456404-AddRoleIdToUsersTable");
exports.dataSource = new typeorm_1.DataSource({
    type: 'sqlite',
    database: './db.sqlite',
    entities: [Role_1.Role],
    migrations: [
        _1747924088667_CreateRolesTable_1.CreateRolesTable1747924088667,
        _1748283713791_CreateUsersTable_1.CreateUsersTable1748283713791,
        _1657997456404_AddRoleIdToUsersTable_1.AddRoleIdToUsersTable1657997456404
    ],
});
//# sourceMappingURL=index.js.map