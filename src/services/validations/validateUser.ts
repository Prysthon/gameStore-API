import IUser from '../../interfaces/user.interface';
import { UserFieldsSchema } from './schema';

export default (newUser: IUser) => {
  const { error } = UserFieldsSchema.validate(newUser);
  if (error) return { type: 'ERROR', payload: error.message };
  return { type: null, payload: '' };
};