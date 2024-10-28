import { Request, Response } from 'express'
export class TesteController {
  public async home(req: Request, res: Response) {
    res.send('Hello, TypeScript + Node.js + Express!')
  }

  public async teste(req: Request, res: Response) {
    res.send('Testing controller method...')
  }
}
