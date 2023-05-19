import {FastifyInstance} from 'fastify'

import indexRoute from './controllers/index'
import demoRouter from './controllers/demo'
export default async function router(fastify:FastifyInstance){

fastify.register(indexRoute,{prefix:'/'})
fastify.register(demoRouter,{prefix:'/demo'})
}