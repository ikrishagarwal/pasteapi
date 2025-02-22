import { Router } from "@oak/oak";
import { Home } from "./routes/home.ts";
import { Page404 } from "./routes/404.ts";
import { Pastes } from "./routes/pastes.ts";
import { Paste } from "./routes/paste.ts";

export const router = new Router();

router.get("/", Home);
router.get("/paste", Paste);
router.get("/pastes", Pastes);
router.all("(.*)", Page404);
