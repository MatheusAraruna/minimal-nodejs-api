import { Router } from 'express'
import { ExampleController } from '../controllers/example.controller'

export const exampleRouter = Router()
const controller = new ExampleController()

exampleRouter.get('/example', controller.example)
