import { Router } from 'express';
import UserController from '../controllers/UserController';
import UserMiddleware from '../middlewares/userMiddleware';

const router = Router();

const productController = new UserController();
const userMiddleware = new UserMiddleware();

router.post(
  '/', 
  userMiddleware.validateFields,
  productController.insertUser,
);

export default router;