import express from 'express'
import { exampleRouter } from '../../../../modules/example'

export const routes = express.Router()

routes.use(exampleRouter)
