import { IRolesRepository } from "@/roles/repositories/IRolesRepository";
import { RolesRepository } from "@/roles/repositories/RolesRepository";
import { container } from "tsyringe";


/**
 * Definir uma interface em src/roles/repositories/IRolesRepository.ts
*/
container.registerSingleton<IRolesRepository>('RolesRepository', RolesRepository);

