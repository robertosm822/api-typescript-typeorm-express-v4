import { rolesRouter } from "@/roles/http/routes/roles.routes";
import { AppError } from "@/shared/errors/AppError";
import { userRouter } from "@/users/http/users.routes";
import { Router } from "express";

const routes = Router();

/* @ts-ignore */
routes.get('/', (request, response) => {
  // throw new AppError("Acesso negado", 401);

  return response.status(200).json({
    message: "Ok"
  });
});
routes.use('/roles', rolesRouter);
routes.use('/users', userRouter);

export {routes};
