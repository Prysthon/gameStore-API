import IProduct from '../../interfaces/product.interface';
import ProductFieldsSchema from './schema';

export default (newProduct: IProduct) => {
  const { error } = ProductFieldsSchema.validate(newProduct);
  if (error) return { type: 'ERROR', payload: error.message };
  return { type: null, payload: '' };
};