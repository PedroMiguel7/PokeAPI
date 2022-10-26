import Router from "express";
import { UserController } from "./controllers/UserController";
import { authMiddleware } from "./middlewares/authMiddleware";

const routes = Router();

routes.post("/", new UserController().Login);

routes.post("/user", authMiddleware, new UserController().create);

routes.post("/user/:id/fav", authMiddleware, new UserController().Favorite);

export default routes;
