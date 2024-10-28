import express from 'express'
import { testeRouter } from '../modules'

export const routes = express.Router();

routes.use(testeRouter);