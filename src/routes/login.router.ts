import { Router } from 'express';
import LoginController from '../controllers/LoginController';
import LoginMiddleware from '../middlewares/loginMiddleware';

const router = Router();

const loginController = new LoginController();
const loginMiddleware = new LoginMiddleware();

router.post(
  '/', 
  loginMiddleware.validateFields,
  loginController.login,
);

export default router;