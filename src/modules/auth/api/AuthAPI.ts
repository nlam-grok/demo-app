// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type AuthData = {
  jwt: string
}

export default function AuthAPI (
  req: NextApiRequest,
  res: NextApiResponse<AuthData>
) {
  if (req.method === 'POST') {
    const username = req.query.username;
    const password = req.query.password;
    res.json({
      jwt: `${username}${password}`
    })
  } else {
    res.status(500);
  }
}
