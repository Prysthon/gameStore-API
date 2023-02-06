import { Router } from 'express';
import ProductController from '../controllers/ProductController';
import ProductsMiddlewares from '../middlewares/productsMiddleware';

const router = Router();

const productController = new ProductController();
const productsMiddlewares = new ProductsMiddlewares();

router.get('/', productController.getAllProducts);

router.post(
  '/', 
  productsMiddlewares.validateFields,
  productController.insertProduct,
);

export default router;