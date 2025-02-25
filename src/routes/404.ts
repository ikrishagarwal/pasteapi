import type { Context } from "@oak/oak";

export const Page404 = (context: Context) => {
  context.response.status = 404;
  context.response.body = {
    message: "404 - Not Found",
    status: "error",
  };
};
