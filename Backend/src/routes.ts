import Router from "express";
import { UserController } from "./controllers/UserController";

const routes = Router();

routes.post("/user", new UserController().create);

routes.post("/user/:id/fav", new UserController().Favorite);

export default routes;
