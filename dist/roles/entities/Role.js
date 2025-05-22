"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const uuid_1 = require("uuid");
class Role {
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
}
exports.Role = Role;
//# sourceMappingURL=Role.js.map