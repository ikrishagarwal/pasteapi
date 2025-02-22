import { Context } from "@oak/oak";

export const Home = (context: Context) => {
  context.response.body = {
    status: "success",
    title: "PasteAPI",
    description:
      "PasteAPI is an API based minimal replica of paste bin. It allows you to store and share text snippets with others. You can create, and read text snippets using this API.",
    features: [
      "Create a new paste",
      "Read an existing paste",
      "List all pastes",
      "List a random paste",
    ],
    endpoints: [
      "GET / - Shows documentation",
      "GET /pastes - Lists all pastes",
      "GET /pastes/random - Shows a random paste",
      "GET /pastes/:id - Shows a paste with the given id",
      "POST /paste - Creates a new paste",
    ],
    authors: {
      name: "Krish",
      github: "https://github.com/ikrishagarwal",
    },
  };
};
