'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    const result = "Hello Restaurant! - It's working now"

    reply
    .code(200)
    .header('content-type','application/json')
    .send(result)
  })
}
