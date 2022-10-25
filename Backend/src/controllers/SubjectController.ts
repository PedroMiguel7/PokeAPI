import { subjectRepository } from "./../repositories/subjectRepository";
import { Request, Response } from "express";

export class SubjectController {
  async create(req: Request, res: Response) {
    const { nickname } = req.body;

    if (!nickname) {
      return res.status(400).json({ mensagem: "coloca o nome ae" });
    }

    try {
      const newSubject = subjectRepository.create({});

      await subjectRepository.save(newSubject);
      return res.status(200).json(newSubject);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ mensagem: "Internal Server Error" });
    }
  }
}
