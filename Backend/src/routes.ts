import Router from "express";
import { UserController } from "./controllers/UserController";
import { authMiddleware } from "./middlewares/authMiddleware";

const routes = Router();

routes.post("/", new UserController().Login);

routes.use(authMiddleware)

routes.post("/user", new UserController().create);
routes.delete("/user/:user_id", new UserController().dellUser);

routes.post("/user/:user_id/fav", new UserController().Favorite);
routes.get("/user/:user_id/fav", new UserController().listFav);
routes.delete("/user/:user_id/fav/:pokemon_id", new UserController().Desfav);

export default routes;
