# PasteAPI

PasteAPI is an API based minimal replica of paste bin. It allows you to store and share text snippets with others. You can create, and read text snippets using this API.

## Features

- Create a new paste
- Read an existing paste
- List all pastes
- List a random paste

## API Endpoints

- `GET /` - Shows documentation
- `GET /pastes` - Lists all pastes
- `GET /pastes/random` - Shows a random paste
- `GET /pastes/:id` - Shows a paste with the given id
- `POST /paste` - Creates a new paste
   - Request Body: `{ content: string }`

## Tech Stack

- Deno
- Deno Deploy
- TypeScript
- KV Database
- Oak

## Getting Started

1. Clone the repository
2. Install dependencies using `deno install`
3. Create a `.env` file and add the following environment variables:
   - `DB_PATH`: path for a local KV database
4. Run the server using `deno run dev`

## Authors

- [@krish](https://github.com/ikrishagarwal)
