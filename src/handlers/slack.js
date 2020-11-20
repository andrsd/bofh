import { excuses } from "../excuses"

export default async request => {
  let i = Math.floor(Math.random() * excuses.length)
  let e = excuses[i]
  let res = {
    "attachments": [
      {
        "fallback": e,
        "footer": "<https://bofh.andrsd.workers.dev|bofh>",
        "text": e
      }
    ],
    "response_type": "in_channel",
    "username": "BOFH"
  }

  return new Response(JSON.stringify(res), {
    headers: { 'content-type': 'application/json;charset=UTF-8' }
  })
}
