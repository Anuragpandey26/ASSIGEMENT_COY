import { Router } from "express";
import { matchController } from "./match.controller";

const router = Router();

router.get("/", (req, res, next) => matchController.getMatches(req, res, next));

export { router as matchRouter };
