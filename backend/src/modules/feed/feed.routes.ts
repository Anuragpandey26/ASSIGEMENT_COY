import { Router } from "express";
import { feedController } from "./feed.controller";

const router = Router();

router.get("/", (req, res, next) => feedController.getFeed(req, res, next));

export { router as feedRouter };
