import { Context } from "@oak/oak";
import { readPastes } from "../lib/database.ts";
import { Paste } from "../lib/types.ts";

export const Random = async (context: Context) => {
  try {
    const entries = await readPastes();

    const key = Math.floor(Math.random() * entries.length);
    const item = entries[key].value as Paste;

    context.response.status = 200;
    context.response.body = {
      status: "success",
      paste: item,
    };
    return;
  } finally {
    context.response.status = 500;
    context.response.body = {
      status: "error",
      message: "Failed to get random paste",
    };
  }
};
