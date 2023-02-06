import express from 'express';

import ProductRouter from './routes/products.router';
import UserRouter from './routes/user.router';

const app = express();

app.use(express.json());

app.use('/products', ProductRouter);

app.use('/users', UserRouter);

export default app;
