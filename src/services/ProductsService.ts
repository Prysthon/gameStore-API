import IProduct from '../interfaces/product.interface';
import connection from '../models/connection';
import ProductsModel from '../models/ProductsModel';
import validateProducts from './validations/validateProducts';

export default class ProductsService {
  private model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  } 

  public async getAllProducts() {
    const products = await this.model.getAllProducts();
    return { type: null, payload: products };
  }

  public async insertProduct(newProduct: IProduct) {
    const { type, payload } = validateProducts(newProduct);
    if (type) return { type, payload };
    const productInsert = await this.model.insertProduct(newProduct);
    return { type: null, payload: productInsert };
  }
}