import Router from "express";
import { FavController } from "./controllers/FavController";
import { UserController } from "./controllers/UserController";
import { authMiddleware } from "./middlewares/authMiddleware";

const routes = Router();

routes.post("/", new UserController().Login);

routes.post("/user", new UserController().createUser);
routes.delete("/user/:user_id", authMiddleware, new UserController().dellUser);


routes.post("/user/:user_id/fav",authMiddleware, new FavController().Favorite);
routes.get("/user/:user_id/fav", authMiddleware, new FavController().listFav);
routes.delete(
  "/user/:user_id/fav/:pokemon_id",
  authMiddleware,
  new FavController().Desfav
);

export default routes;
