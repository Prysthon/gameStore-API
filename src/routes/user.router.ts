import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

const productController = new UserController();

router.post('/', productController.insertUser);

export default router;