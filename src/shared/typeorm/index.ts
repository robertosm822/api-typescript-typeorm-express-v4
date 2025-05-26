import { DataSource } from "typeorm";
import { CreateRolesTable1747924088667 } from "./migrations/1747924088667-CreateRolesTable";
import { Role } from "../../roles/entities/Role";
import { CreateUsersTable1748283713791 } from "./migrations/1748283713791-CreateUsersTable";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [Role],
  migrations: [CreateRolesTable1747924088667, CreateUsersTable1748283713791],
});
