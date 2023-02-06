import { Pool } from 'mysql2/promise';
import ILogin from '../interfaces/login.interface';

export default class LoginModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async login(login: ILogin): Promise<ILogin | null> {
    const query = `
      SELECT username, password 
      FROM Trybesmith.users 
      WHERE username = ? AND password = ?;
    `;
    const values = [login.username, login.password];
    const result = await this.connection.execute(query, values);
    const [rows] = result;
    const [user] = rows as ILogin[];
    return user;
  }
} 