import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public insertUser = async (req: Request, res: Response) => {
    const { payload } = await this.service.insertUser(req.body);
    return res.status(201).json({ token: payload });
  };
}