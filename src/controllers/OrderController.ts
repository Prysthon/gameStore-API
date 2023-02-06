import { Request, Response } from 'express';
import OrderService from '../services/OrderService';

export default class OrderController {
  private service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  public getAllOrders = async (req: Request, res: Response) => {
    const { payload } = await this.service.getAllOrders();
    return res.status(200).json(payload);
  };
}