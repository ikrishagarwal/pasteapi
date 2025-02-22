import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => "Hello World!")
  .get("*", (request) => `Path ${request.path} is not defined yet!`)
  .listen(process.env.PORT ?? 3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
