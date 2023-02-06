import { Pool } from 'mysql2/promise';
import IUser from '../interfaces/user.interface';

export default class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async insertUser(newUser: IUser) {
    const values = [newUser.username, newUser.vocation, 
      newUser.level, newUser.password];
    await this.connection.execute(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)', 
      values,
    );
  }
}