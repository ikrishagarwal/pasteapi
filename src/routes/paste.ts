import { Context } from "@oak/oak";
import { createPaste } from "../lib/database.ts";
import { log } from "../lib/logger.ts";

export const Paste = async (context: Context) => {
  try {
    const content = (await context.request.body.json()).value.content;

    if (content === null) {
      content.response.status = 400;
      context.response.body = {
        status: "error",
        message: "Content is required",
      };
      return;
    }

    const paste = await createPaste(content);
    if (paste === null) throw new Error("Failed to create paste");

    content.response.status = 201;
    context.response.body = {
      status: "success",
      paste,
    };
  } catch (error) {
    log(error);

    context.response.status = 500;
    context.response.body = {
      status: "error",
      message: "Failed to create paste",
    };
  }
};
