import { AppDataSource } from "./data-source";
import express, { application } from "express";
import routes from "./routes";
import { errorMiddleware } from "./middlewares/error";

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.use(routes);

  app.use(errorMiddleware)
  
  return app.listen(process.env.port);
});
