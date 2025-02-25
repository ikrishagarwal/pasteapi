import { Application } from "@oak/oak";
import { router } from "#src/routes.ts";
import "#src/init.ts";

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({
  port: 3000,
});

console.log(`Server running at http://localhost:3000`);
