"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const celebrate_1 = require("celebrate");
const tsyringe_1 = require("tsyringe");
const CreateUserController_1 = require("../useCases/createUser/CreateUserController");
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
const createUserController = tsyringe_1.container.resolve(CreateUserController_1.CreateUserController);
userRouter.post('/', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        name: celebrate_1.Joi.string().required(),
        email: celebrate_1.Joi.string().email().required(),
        password: celebrate_1.Joi.string().required(),
        isAdmin: celebrate_1.Joi.boolean().required(),
        roleId: celebrate_1.Joi.string().uuid().required()
    },
}), 
/* @ts-ignore */
(request, response) => {
    return createUserController.handle(request, response);
});
//# sourceMappingURL=users.routes.js.map