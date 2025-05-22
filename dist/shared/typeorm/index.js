"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const typeorm_1 = require("typeorm");
const _1747924088667_CreateRolesTable_1 = require("./migrations/1747924088667-CreateRolesTable");
exports.dataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "./db.sqlite",
    entities: [],
    migrations: [_1747924088667_CreateRolesTable_1.CreateRolesTable1747924088667],
});
//# sourceMappingURL=index.js.map