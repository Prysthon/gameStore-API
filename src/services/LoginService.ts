import createTokenJWT from '../auth/jwtConfig';
import ILogin from '../interfaces/login.interface';
import connection from '../models/connection';
import LoginModel from '../models/LoginModel';

export default class LoginService {
  private model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async login(login: ILogin) {
    const user = await this.model.login(login);
    if (!user) return { type: 'UNAUTHORIZED', payload: 'Username or password invalid' };
    const token = createTokenJWT(login);
    return { type: null, payload: token };
  }
}