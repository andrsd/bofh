import { excuses } from "../excuses"

export default async request => {
  let i = Math.floor(Math.random() * excuses.length)
  return new Response(excuses[i], {
    headers: { 'content-type': 'text/plain' }
  })
}
