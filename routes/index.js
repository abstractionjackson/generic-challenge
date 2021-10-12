import { Router } from "express";

import emailRoute from './email.js'

const route = new Router()

route.use('/email', emailRoute)

export default route;