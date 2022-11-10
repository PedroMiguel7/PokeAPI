import Router from "express";
import { FavController } from "./controllers/FavController";
import { LoginController } from "./controllers/LoginController";
import { UserController } from "./controllers/UserController";
import { authMiddleware } from "./middlewares/authMiddleware";

const routes = Router();

routes.post("/", new LoginController().Login);

routes.post("/user", new UserController().CreateUser);
routes.get("/user", authMiddleware, new UserController().ListUser)
routes.put("/user/:user_id", authMiddleware, new UserController().UpdateUser)
routes.delete("/user/:user_id", authMiddleware, new UserController().DelUser);

routes.post("/user/:user_id/fav", authMiddleware, new FavController().Favorite);
routes.get("/user/:user_id/fav", authMiddleware, new FavController().ListFav);
routes.put("/user/:user_id/fav/:id_pokemon", authMiddleware, new FavController().Updatefav);
routes.delete("/user/:user_id/fav/:pokemon_id", authMiddleware, new FavController().Desfav);

export default routes;
