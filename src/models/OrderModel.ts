import { Pool } from 'mysql2/promise';
import IOrder from '../interfaces/order.interface';

export default class OrderModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrders(): Promise<IOrder[]> {
    const query = `SELECT a.id AS id, a.user_id AS userId, JSON_ARRAYAGG(p.order_id) AS productsIds
    FROM Trybesmith.orders AS a
    INNER JOIN Trybesmith.products AS p
    ON a.user_id = p.order_id
    GROUP BY a.id;`;
    const orders = await this.connection.execute(query);
    const [rows] = orders;
    return rows as IOrder[];
  }
}