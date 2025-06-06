import { rolesRouter } from "@/roles/http/routes/roles.routes";
import { AppError } from "@/shared/errors/AppError";
import { Router } from "express";

const routes = Router();

/* @ts-ignore */
routes.get('/', (request, response) => {
  // throw new AppError("Acesso negado", 401);

  return response.status(200).json({
    message: "Ok"
  });
});

routes.use('/users', rolesRouter);

export {routes};
