import { DataSource } from "typeorm";
import { CreateRolesTable1747924088667 } from "./migrations/1747924088667-CreateRolesTable";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [],
  migrations: [CreateRolesTable1747924088667],
});
