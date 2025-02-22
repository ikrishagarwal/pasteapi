export function GET(request: Request) {
  return Response.json({
    status: 200,
    message: {
      path: new URL(request.url).pathname,
    },
  });
}
