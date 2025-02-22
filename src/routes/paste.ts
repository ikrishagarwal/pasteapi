import { Context } from "@oak/oak";
import { createPaste } from "../lib/database.ts";

export const Paste = async (context: Context) => {
  const paste = await createPaste("hi there");

  if (paste !== null) {
    context.response.body = {
      status: "success",
      id: paste.id,
      content: paste.content,
      createdAt: paste.createdAt,
    };
    return;
  }

  context.response.body = {
    status: "error",
    message: "Failed to create paste",
  };
};
