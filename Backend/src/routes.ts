import Router from "express";
import { UserController } from "./controllers/UserController";
import { authMiddleware } from "./middlewares/authMiddleware";

const routes = Router();

routes.post("/", new UserController().Login);

routes.post("/user", authMiddleware, new UserController().create);
routes.delete("/user/:user_id", authMiddleware, new UserController().dellUser);

routes.post(
  "/user/:user_id/fav",
  authMiddleware,
  new UserController().Favorite
);
routes.get("/user/:user_id/fav", authMiddleware, new UserController().listFav);
routes.delete(
  "/user/:user_id/fav/:pokemon_id",
  authMiddleware,
  new UserController().Desfav
);

export default routes;
