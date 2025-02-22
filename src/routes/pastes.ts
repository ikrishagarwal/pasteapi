import { Context } from "@oak/oak";

export const Pastes = (context: Context) => {
  context.response.body = {
    status: "success",
    pastes: [],
  };
};
