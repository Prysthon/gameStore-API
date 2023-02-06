import express from 'express';

import ProductRouter from './routes/products.router';
import UserRouter from './routes/user.router';
import OrderRouter from './routes/orders.router';

const app = express();

app.use(express.json());

app.use('/products', ProductRouter);

app.use('/users', UserRouter);

app.use('/orders', OrderRouter);

export default app;
