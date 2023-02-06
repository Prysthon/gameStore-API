import { Request, Response } from 'express';
import ProductsService from '../services/ProductsService';

export default class ProductController {
  private service: ProductsService;

  constructor() {
    this.service = new ProductsService();
  }

  public insertProduct = async (req: Request, res: Response) => {
    const { payload } = await this.service.insertProduct(req.body);
    return res.status(201).json(payload);
  };
}