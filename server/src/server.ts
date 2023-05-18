import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'

const PORT = 3333
const URL = 'http://localhost:'

const app = fastify()

app.register(cors, {
  origin: true, // todas URL's de Front-End poderam acessar as rotas
})
app.register(memoriesRoutes)

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log(`HTP server running on ${URL}${PORT}`)
  })
