import createTokenJWT from '../auth/jwtConfig';
import IUser from '../interfaces/user.interface';
import connection from '../models/connection';
import UserModel from '../models/UserModel';
import validateUser from './validations/validateUser';

export default class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  } 

  public async insertUser(newUser: IUser) {
    const { type, payload } = validateUser(newUser);
    if (type) return { type, payload };
    await this.model.insertUser(newUser);
    const token = createTokenJWT(newUser);
    return { type: null, payload: token };
  }
}