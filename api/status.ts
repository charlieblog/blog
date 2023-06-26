export default function handler(req: Request) {
    let header = new Headers();
    header.set('Cache-Control', 's-maxage=63072000');

    return new Response("OK", {
        "status": 200,
        "statusText": "OK",
        "headers": header
    });
}
