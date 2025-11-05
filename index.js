import Fastify from 'fastify'
const app = Fastify()

app.get('/cpu', async (req, reply) => {
  // pequena carga CPU-bound pra medir diferença real
  let sum = 0
  for (let i = 0; i < 5e6; i++) sum += Math.sqrt(i)
  return { result: sum }
})

app.get('/io', async (req, reply) => {
  // simulação de operação leve de IO
  await new Promise(r => setTimeout(r, 50))
  return { status: 'ok' }
})

app.listen({ port: process.env.PORT || 3000, host: '0.0.0.0' })
