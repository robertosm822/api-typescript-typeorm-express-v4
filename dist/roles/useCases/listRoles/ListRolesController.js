"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListRolesController = void 0;
const ListRolesUseCase_1 = require("./ListRolesUseCase");
const tsyringe_1 = require("tsyringe");
class ListRolesController {
    async handle(request, response) {
        const page = request.query.page && Number(request.query.page) > 0 ? Number(request.query.page) : 1;
        const limit = request.query.limit && Number(request.query.limit) > 0 ? Number(request.query.limit) : 15;
        const listRolesUsecase = tsyringe_1.container.resolve(ListRolesUseCase_1.ListRolesUseCase);
        const roles = await listRolesUsecase.execute({ page, limit });
        return response.json(roles);
    }
}
exports.ListRolesController = ListRolesController;
//# sourceMappingURL=ListRolesController.js.map