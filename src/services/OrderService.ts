import connection from '../models/connection';
import OrderModel from '../models/OrderModel';

export default class OrderService {
  private model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  } 

  public async getAllOrders() {
    const orders = await this.model.getAllOrders();
    return { type: null, payload: orders };
  }
}