import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/product.interface';

export default class ProductsModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllProducts(): Promise<IProduct[]> {
    const query = 'SELECT * FROM Trybesmith.products';
    const result = await this.connection.execute(query);
    const [rows] = result;
    return rows as IProduct[];
  }

  public async insertProduct(newProduct: IProduct): Promise<IProduct> {
    const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
    const values = [newProduct.name, newProduct.amount];
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, values);
    return { id: insertId, ...newProduct };
  }
}