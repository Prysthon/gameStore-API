import { Request, Response } from 'express';
import LoginService from '../services/LoginService';

export default class LoginController {
  private service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  public login = async (req: Request, res: Response) => {
    const { type, payload } = await this.service.login(req.body);
    if (type) return res.status(401).json({ message: payload });
    res.status(200).json({ token: payload });
  };
}