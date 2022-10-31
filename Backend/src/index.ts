import { AppDataSource } from "./data-source";
import express, { application } from "express";
import routes from "./routes";
import { errorMiddleware } from "./middlewares/error";
import cors from "cors";

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.use(cors());

  app.use(routes);

  app.use(errorMiddleware);

  return app.listen(process.env.port);
});
