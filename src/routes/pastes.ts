import type { Context } from "@oak/oak";
import { readPastes } from "#lib/database.ts";
import type { Paste } from "#lib/types.ts";

export const Pastes = async (context: Context) => {
  try {
    const entries = await readPastes();

    const pastes = entries.map((item) => {
      return (item.value as Paste).id;
    });

    context.response.status = 200;
    context.response.body = {
      status: "success",
      pastes,
    };
  } catch (error) {
    console.log(error);

    context.response.status = 500;
    context.response.body = {
      status: "error",
      message: "Failed to get pastes",
    };
  }
};
