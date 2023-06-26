import { next } from '@vercel/edge';

export const config = {
    matcher: '/((?!api/css|api/status$).*)'
};

const allowList = ["charliez0.eu.org", "charliez0sp.eu.org", "charliez0.vercel.app", "charliez0sp.vercel.app",
    "charliez0.tk", "charliez0.gq", "charliez0.cf"];

export default function middleware(req: Request) {
    const url = new URL(req.url);
    if (allowList.indexOf(url.host) === -1) {
        return Response.redirect("https://charliez0.vercel.app", 301);
    }
    return next();
}
