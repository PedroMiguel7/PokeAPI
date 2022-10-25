import { Subject } from "typeorm/persistence/Subject";
import { AppDataSource } from "../data-source";

export const subjectRepository = AppDataSource.getRepository(Subject);
