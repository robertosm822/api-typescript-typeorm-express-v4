"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const AppError_1 = require("../errors/AppError");
const roles_routes_1 = require("@/roles/http/routes/roles.routes");
const swagger_json_1 = __importDefault(require("../../swagger.json"));
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.use(routes_1.routes);
app.use(roles_routes_1.rolesRouter);
/* @ts-ignore */
app.use((error, _request, response, next) => {
    if (error instanceof AppError_1.AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message,
        });
    }
    console.log(error);
    return response.status(500).json({
        status: "error",
        message: "Internal server error",
    });
});
//# sourceMappingURL=app.js.map