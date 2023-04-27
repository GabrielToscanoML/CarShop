import { Router } from 'express';
import MotoController from '../Controllers/MotoController';

const routes = Router();

routes.post(
  '/',
  (req, res, next) => new MotoController(req, res, next).create(),
);

routes.get(
  '/',
  (req, res, next) => new MotoController(req, res, next).find(),
);

routes.get(
  '/:id',
  (req, res, next) => new MotoController(req, res, next).findById(),
);

routes.put(
  '/:id',
  (req, res, next) => new MotoController(req, res, next).update(),
);

export default routes;