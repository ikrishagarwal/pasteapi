import { Router } from "@oak/oak";
import { Home } from "#routes/home.ts";
import { Page404 } from "#routes/404.ts";
import { Pastes } from "#routes/pastes.ts";
import { Paste } from "#routes/paste.ts";
import { SinglePaste } from "#routes/pastes/id.ts";
import { Random } from "#routes/random.ts";

export const router = new Router();

router.get("/", Home);
router.post("/paste", Paste);
router.get("/pastes", Pastes);
router.get("/pastes/:id", SinglePaste);
router.get("/random", Random);
router.all("(.*)", Page404);
