import { createRolesController } from '@/roles/useCases/createRole';
import { listRolesController } from '@/roles/useCases/listRoles';
import { showRolesController } from '@/roles/useCases/showRole';
import { updateRolesController } from '@/roles/useCases/updateRole';
import { Router } from 'express';

const rolesRouter = Router();

/* @ts-ignore */
rolesRouter.get('/roles', (request, response) => {

  return listRolesController.handle(request, response);
});

/* @ts-ignore */
rolesRouter.get('/roles/:id', (request, response) => {
  return showRolesController.handle(request, response);
});

/* @ts-ignore */
rolesRouter.post('/roles', (request, response) => {
  return createRolesController.handle(request, response);
});

/* @ts-ignore */
rolesRouter.put('/roles/:id', (request, response) => {
  return updateRolesController.handle(request, response);
});

export { rolesRouter }
