import IProduct from '../interfaces/product.interface';
import connection from '../models/connection';
import ProductsModel from '../models/ProductsModel';

export default class ProductsService {
  private model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  } 

  public async insertProduct(newProduct: IProduct) {
    const productInsert = await this.model.insertProduct(newProduct);
    return { type: null, payload: productInsert };
  }
}