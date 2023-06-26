import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res:VercelResponse) {
    res.setHeader('Cache-Control', 's-maxage=63072000');
    res.end("OK");
}
