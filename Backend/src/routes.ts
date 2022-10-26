import Router from "express";
import { UserController } from "./controllers/UserController";
import { authMiddleware } from "./middlewares/authMiddleware";

const routes = Router();

routes.post("/", new UserController().Login);

routes.use(authMiddleware);

routes.post("/user", new UserController().create);


routes.post("/user/:id/fav", new UserController().Favorite);
routes.get("/user/:id/fav", new UserController().listFav);
routes.delete("/user/:id/fav/:id", new UserController().Desfav)

export default routes;
