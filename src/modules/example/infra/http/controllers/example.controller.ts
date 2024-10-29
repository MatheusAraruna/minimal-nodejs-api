import { Request, Response } from 'express'
import ExampleService from '../../../services/example.service'

export class ExampleController {
  public async example(req: Request, res: Response) {
    const exampleService = new ExampleService()
    exampleService.execute()
    res.send('Example working...')
  }
}
