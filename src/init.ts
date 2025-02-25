import "@std/dotenv/load";

console.log(Deno.env.get("DB_PATH"));
export const kv = await Deno.openKv(Deno.env.get("DB_PATH") ?? undefined);

import "#crons/autoDelete.ts";
