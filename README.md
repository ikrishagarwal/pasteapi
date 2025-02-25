# PasteAPI

PasteAPI is an API based minimal replica of paste bin. It allows you to store
and share text snippets with others. You can create, and read text snippets
using this API.

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

## Self Hosting Guide

This code base is deployed on the Deno Deploy Infrastructure thus deploying it
on your own account of Deno Deploy will be a butter smooth process. But if you
want to host it on your own server then you can follow the below steps:

- Clone this repository on your server
- Install Deno and run `deno install` to install all the dependencies
- Create a `.env` file and add the following environment variables:
  - `DB_PATH`: path for a local KV database
- Run the server using `deno run start`

> NOTE: It is recommended to run this as a system service as you can configure
> it to automatically restarts in case of a crash. You can use `systemd` for
> this purpose. Follow this
> [guide](https://linuxhandbook.com/create-systemd-services/) for more info.

> NOTE: Some permanent paste IDs are hardcoded in the codebase at
> `src/constants.ts` which would obviously differ for your hosted service which
> you can change as per your preference.

## Authors

- [@krish](https://github.com/ikrishagarwal)
