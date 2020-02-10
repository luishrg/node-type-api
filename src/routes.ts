import { Router } from 'express'

import UserController from './controllers/User'

const routes = Router()

routes.get('/users', UserController.list)
routes.post('/user/create', UserController.create)

export default routes
