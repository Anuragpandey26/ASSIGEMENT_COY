import { Router } from "express";
import { swipeController } from "./swipe.controller";

const router = Router();

router.post("/", (req, res, next) => swipeController.handleSwipe(req, res, next));

export { router as swipeRouter };
