import { Context } from "@oak/oak";
import { readPastes } from "../lib/database.ts";

export const Pastes = async (context: Context) => {
  const pastes = await readPastes();

  context.response.body = {
    status: "success",
    pastes: pastes,
  };
};
