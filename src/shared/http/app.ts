import express, { NextFunction, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import { errors } from "celebrate";
import { routes } from "./routes";
import { AppError } from "../errors/AppError";
import { rolesRouter } from "@/roles/http/routes/roles.routes";
import swaggerFile from "../../swagger.json";
import '../../shared/container';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(routes);
app.use(rolesRouter);
// middleware de validacao das rotas
app.use(errors());

/* @ts-ignore */
app.use((error: Error, _request: Request, response: Response, next: NextFunction) => {
  if (error instanceof AppError) {
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

export { app };
