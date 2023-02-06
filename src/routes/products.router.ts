import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const router = Router();

const productController = new ProductController();

router.get('/', productController.getAllProducts);

router.post('/', productController.insertProduct);

export default router;