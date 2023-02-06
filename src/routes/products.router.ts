import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const router = Router();

const productController = new ProductController();

router.post('/', productController.insertProduct);

export default router;