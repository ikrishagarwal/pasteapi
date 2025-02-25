import { PERMANENT_PASTE_IDS } from "#src/constants.ts";
import { kv } from "#src/init.ts";
import { readPastes } from "#lib/database.ts";
import { DataBaseKeys, type Paste } from "#lib/types.ts";

Deno.cron("Run every 12 hours", { hour: { every: 12 } }, async () => {
  const entries = await readPastes();
  const pastes = entries.map((item) => {
    const paste = item.value as Paste;

    if (!paste.validTill) {
      paste.validTill = new Date(paste.createdAt);
      paste.validTill.setDate(paste.validTill.getDate() + 7);
    }

    return paste;
  });

  const now = new Date();

  for (const paste of pastes) {
    if (now > paste.validTill) {
      if (!PERMANENT_PASTE_IDS.includes(paste.id)) {
        await kv.delete([DataBaseKeys.PASTES, paste.id]);
      }
    }
  }
});
