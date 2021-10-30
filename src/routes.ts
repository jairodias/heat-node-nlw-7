import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLastThreeMessagesController } from "./controllers/GetLastThreeMessagesController";
import { ProfileUserController } from "./controllers/ProfileUserControllerController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post(
    "/messages",
    ensureAuthenticated,
    new CreateMessageController().handle
);

router.get("/messages/last-three", new GetLastThreeMessagesController().handle);

router.get(
    "/profile",
    ensureAuthenticated,
    new ProfileUserController().handle)

export { router };