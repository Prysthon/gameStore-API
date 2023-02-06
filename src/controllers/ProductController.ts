import { Request, Response } from 'express';
import ProductsService from '../services/ProductsService';

export default class ProductController {
  private service: ProductsService;

  constructor() {
    this.service = new ProductsService();
  }

  public getAllProducts = async (_req: Request, res: Response) => {
    const { payload } = await this.service.getAllProducts();
    return res.status(200).json(payload);
  };

  public insertProduct = async (req: Request, res: Response) => {
    const { type, payload } = await this.service.insertProduct(req.body);
    if (type) return res.status(422).json({ message: payload });
    return res.status(201).json(payload);
  };
}