import { DataBaseKeys, type Paste } from "./types.ts";
import { kv } from "../init.ts";

export const createPaste = async (content: string) => {
  const id = crypto.randomUUID();
  const createdAt = new Date();

  // add 7 days from now
  const validTill = new Date();
  validTill.setDate(validTill.getDate() + 7);

  const paste: Paste = {
    id,
    content,
    createdAt,
    validTill,
  };

  const response = await kv.set([DataBaseKeys.PASTES, id], paste);

  if (response.ok) return paste;
  return null;
};

export const readPastes = async () => {
  const entries = await Array.fromAsync(
    kv.list({ prefix: [DataBaseKeys.PASTES] }),
  );

  return entries || [];
};

export const readSinglePaste = async (id: string) => {
  const response = await kv.get([DataBaseKeys.PASTES, id]);
  return response.value || null;
};
