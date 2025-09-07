import express from "express";

const router = express.Router();

import { shorten, redirect, deleteUrl } from "./urls.controllers";
import { authorize } from "../../middlewares/auth";

router.post("/shorten", authorize, shorten);
router.get("/:code", redirect);
router.delete("/:code", authorize, deleteUrl);

export default router;
