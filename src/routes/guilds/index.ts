import { Router } from "express";
import { isAuthenticated } from "../../utils/middleware";
import { getGuildController } from "../../controllers/guilds";
const router = Router();

router.get("/", isAuthenticated, getGuildController );

export default router;
