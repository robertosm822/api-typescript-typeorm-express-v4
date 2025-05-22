"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListRolesController = void 0;
class ListRolesController {
    constructor(listRolesUseCase) {
        this.listRolesUseCase = listRolesUseCase;
    }
    async handle(request, response) {
        const page = request.query.page && Number(request.query.page) > 0 ? Number(request.query.page) : 1;
        const limit = request.query.limit && Number(request.query.limit) > 0 ? Number(request.query.limit) : 15;
        const roles = await this.listRolesUseCase.execute({ page, limit });
        return response.json(roles);
    }
}
exports.ListRolesController = ListRolesController;
//# sourceMappingURL=ListRolesController.js.map