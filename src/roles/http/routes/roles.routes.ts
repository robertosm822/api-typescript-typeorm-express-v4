
import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import { container } from 'tsyringe';
import { ListRolesController } from '@/roles/useCases/listRoles/ListRolesController';
import { ShowRoleController } from '@/roles/useCases/showRole/ShowRoleController';
import { CreateRoleController } from '@/roles/useCases/createRole/CreateRoleController';
import { UpdateRoleController } from '@/roles/useCases/updateRole/UpdateRoleController';
import { DeleteRoleController } from '@/roles/useCases/deleteRole/DeleteRoleController';

const rolesRouter = Router();
const listRolesController = container.resolve(ListRolesController);
const showRolesController = container.resolve(ShowRoleController);
const createRolesController = container.resolve(CreateRoleController);
const updateRolesController = container.resolve(UpdateRoleController);
const deleteRolesController = container.resolve(DeleteRoleController);

/* @ts-ignore */
rolesRouter.get('/roles', (request, response) => {

  return listRolesController.handle(request, response);
});


rolesRouter.get('/roles/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().uuid().required(),
  })
  /* @ts-ignore */
}),(request, response) => {
  return showRolesController.handle(request, response);
});


rolesRouter.post('/roles',celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
  })
  /* @ts-ignore */
}), (request, response) => {
  return createRolesController.handle(request, response);
});


rolesRouter.put('/roles/:id',celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
  })
}),celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().uuid().required(),
  })
  /* @ts-ignore */
}), (request, response) => {
  return updateRolesController.handle(request, response);
});

/* @ts-ignore */
rolesRouter.delete('/roles/:id',  celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().uuid().required(),
  })
  /* @ts-ignore */
}),(request, response) => {
  return deleteRolesController.handle(request, response);
});

export { rolesRouter }
