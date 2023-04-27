// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mockData from "../../mocks/mocks_data"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  switch (method) {
    case 'GET':
      const rooms = mockData;
      console.log(rooms)
      res.status(200).json({ rooms });
      break;
    case 'POST':
      const newRoom = { id: mockData.length + 1, ...body };
      mockData.push(newRoom);
      res.status(201).json({ newRoom });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}