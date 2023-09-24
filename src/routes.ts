import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";

const router = Router();

//User Routers
router.post("/users", new CreateUserController().handle);

export { router };
