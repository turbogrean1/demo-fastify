import { FastifyInstance  ,FastifyRequest ,FastifyReply} from 'fastify'
export default async function demo(fastify:FastifyInstance) {
   
   
 fastify.get('/',async(request: FastifyRequest,reply:FastifyReply)=>{
   reply.send({message:"Hello Demo GET"})

    })

    //C = CREATE
    fastify.post('/',async(request: FastifyRequest,reply:FastifyReply)=>{
        reply.send({message:"Hello Demo POST"})
})

fastify.get('/params',async(request: FastifyRequest,reply:FastifyReply)=>{
    const body: any = request.body
    const username = body.username
    const password = body.password

    reply.send({username,password})
})
}