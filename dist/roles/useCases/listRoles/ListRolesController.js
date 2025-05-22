"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListRolesController = void 0;
class ListRolesController {
    constructor(listRolesUseCase) {
        this.listRolesUseCase = listRolesUseCase;
    }
    handle(request, response) {
        const roles = this.listRolesUseCase.execute();
        return response.json(roles);
    }
}
exports.ListRolesController = ListRolesController;
//# sourceMappingURL=ListRolesController.js.map