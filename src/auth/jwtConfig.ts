import jwt, { SignOptions } from 'jsonwebtoken';
import ILogin from '../interfaces/login.interface';
import IUser from '../interfaces/user.interface';

export default function createTokenJWT(payload: IUser | ILogin) {
  const config: SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: payload }, 'secret', config);
  return token;
}