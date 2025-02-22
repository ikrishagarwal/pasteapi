export function GET(request: Request) {
  return Response.json({
    status: 404,
    message: "Page not found!",
  });
}
