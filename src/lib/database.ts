import { DataBaseKeys, Paste } from "./types.ts";
import { kv } from "../init.ts";

export const createPaste = async (content: string) => {
  const id = crypto.randomUUID();
  const createdAt = new Date();

  const paste: Paste = {
    id,
    content,
    createdAt,
  };

  const response = await kv.set([DataBaseKeys.PASTES, id], paste);

  if (response.ok) return paste;
  return null;
};

export const readPastes = async () => {
  const response = await kv.get([DataBaseKeys.PASTES]);

  if (response) return response.value;
  return [];
};
