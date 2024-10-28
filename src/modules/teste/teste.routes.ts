import express from 'express'
import { TesteController } from './teste.controller'

const controller = new TesteController()
export const testeRouter = express.Router()

testeRouter.get('/', controller.home)
testeRouter.get('/teste', controller.teste)
