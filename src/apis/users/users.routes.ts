import express, { RequestHandler } from "express";
import { authorize } from "../../middlewares/auth";
const router = express.Router();

import { signup, signin, getUsers } from "./users.controllers";
import { shorten } from "../urls/urls.controllers";

router.post("/signup", signup);
router.post("/signin", signin as RequestHandler);
router.get("/users", getUsers);

export default router;
