import 'dotenv/config'
import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { authRoutes } from './routes/auth'

const PORT = 3333
const URL = 'http://localhost:'

const app = fastify()

app.register(cors, {
  origin: true, // todas URL's de Front-End poderam acessar as rotas
})

app.register(jwt, {
  secret: 'spacetime',
})

app.register(memoriesRoutes)
app.register(authRoutes)

app
  .listen({
    port: PORT,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log(`HTP server running on ${URL}${PORT}`)
  })
