import { Router } from "@oak/oak";
import { Home } from "./routes/home.ts";
import { Page404 } from "./routes/404.ts";
import { Pastes } from "./routes/pastes.ts";

export const router = new Router();

router.get("/", Home);
router.get("/pastes", Pastes);
router.all("(.*)", Page404);
