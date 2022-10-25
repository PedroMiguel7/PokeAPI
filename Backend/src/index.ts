import { AppDataSource } from "./data-source";
import express, { application } from "express";
import routes from "./routes";

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.use(routes);

  return app.listen(process.env.port);
});
