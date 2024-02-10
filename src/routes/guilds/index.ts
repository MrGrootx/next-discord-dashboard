import { Router } from "express";
import { isAuthenticated } from "../../utils/middleware";
const router = Router();

router.get("/", isAuthenticated, (req, res) => {
  res.sendStatus(200);
});

export default router;
