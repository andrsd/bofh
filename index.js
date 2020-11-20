import Router from "./router"
import plain from './src/handlers/plain'
import json from './src/handlers/json'
import slack from './src/handlers/slack'

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond with BOFH excuse
 * @param {Request} request
 */
async function handleRequest(request) {
  const r = new Router()
  r.get("/", plain)
  r.get("/json", json)
  r.get("/slack", slack)

  let response = await r.route(request)

  if (!response) {
    response = new Response("Not found", { status: 404 })
  }

  return response
}
