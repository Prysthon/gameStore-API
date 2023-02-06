import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public insertUser = async (req: Request, res: Response) => {
    const { type, payload } = await this.service.insertUser(req.body);
    if (type) return res.status(422).json({ message: payload });
    return res.status(201).json({ token: payload });
  };
}