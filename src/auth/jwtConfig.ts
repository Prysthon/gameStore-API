import jwt, { SignOptions } from 'jsonwebtoken';
import IUser from '../interfaces/user.interface';

export default function createTokenJWT(payload: IUser) {
  const config: SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: payload }, 'secret', config);
  return token;
}