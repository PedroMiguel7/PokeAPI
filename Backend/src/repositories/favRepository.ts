import { AppDataSource } from "../data-source";
import { Fav } from "../entities/Fav";

export const favRepository = AppDataSource.getRepository(Fav)