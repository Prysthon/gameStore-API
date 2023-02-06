import Joi from 'joi';

const ProductFieldsSchema = Joi.object({
  name: Joi.string().min(3),
  amount: Joi.string().min(3),
});

export const UserFieldsSchema = Joi.object({
  username: Joi.string().min(3),
  vocation: Joi.string().min(3),
  level: Joi.number().min(1),
  password: Joi.string().min(8),
});

export default ProductFieldsSchema;
