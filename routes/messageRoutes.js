import { Router } from "express";
import { sendMessage } from "../controllers/messageContoller.js";

const messageRouter = Router();

messageRouter.post("/send", sendMessage);

export default messageRouter;