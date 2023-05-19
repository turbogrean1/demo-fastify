import * as fastify from 'fastify'
import router  from './router'

const app :fastify.FastifyInstance = fastify.fastify({

logger:{

    level:'info'
}
})
//app.register(require('fastify-cors'))
//app.register(require('fastify-formbody'))
app.register(router)

export default app
