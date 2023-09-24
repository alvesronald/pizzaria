import { Router } from "express";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { CreateUserController } from "./controllers/user/CreateUserController";

const router = Router();

//User Routers
router.post("/users", new CreateUserController().handle);
router.post("/auth", new AuthUserController().handle);

export { router };
