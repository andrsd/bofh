import { excuses } from "../excuses"

export default async request => {
  let i = Math.floor(Math.random() * excuses.length)
  let e = excuses[i]
  let res = {
    "excuse": e
  }

  return new Response(JSON.stringify(res), {
    headers: { 'content-type': 'application/json;charset=UTF-8' }
  })
}
