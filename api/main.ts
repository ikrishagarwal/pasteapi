export function GET(request: Request) {
  return Response.json({
    status: 200,
    data: {
      path: new URL(request.url).pathname,
    },
    message: "Hello from Vercel!",
  });
}
