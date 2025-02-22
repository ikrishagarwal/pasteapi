import { RouterContext } from "@oak/oak";
import { readSinglePaste } from "../../lib/database.ts";

export const SinglePaste = async (
  context: RouterContext<"/pastes/:id", PasteParams>
) => {
  try {
    const id = context.params.id;
    const paste = await readSinglePaste(id);

    if (paste !== null) {
      context.response.status = 200;
      context.response.body = {
        status: "success",
        paste,
      };
      return;
    }
  } finally {
    context.response.status = 500;
    context.response.body = {
      status: "error",
      message: "Failed to get paste",
    };
  }
};

type PasteParams = {
  id: string;
};
