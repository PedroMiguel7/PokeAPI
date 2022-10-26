import { userRepository } from "./../repositories/userRepository";
import { Response } from "express";
import { Request } from "express";
import { favRepository } from "../repositories/favRepository";
export class UserController {
  async create(req: Request, res: Response) {
    const { nickname, email, password } = req.body;
    try {
      const newUser = userRepository.create({ nickname, email, password });
      await userRepository.save(newUser);

      return res.status(201).json(newUser);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ mensagem: "Internal Server Error" });
    }
  }

  async Favorite(req: Request, res: Response) {
    const { user_id } = req.params;
    const { pokemon_id } = req.body;

    try {
      const user = await userRepository.findOneBy({ id: Number(user_id) });
      if (!user) {
        return res.status(404).json({ mensagem: "User not found" });
      }

      const newFav = favRepository.create({
        user_id: user_id,
        pokemon_id: pokemon_id,
      });

      await favRepository.save(newFav);

      return res.status(201).json(newFav);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ mensagem: "Internal Server Error" });
    }
  }

  // async listFav(req: Request, res: Response) {
  //   const user_id = req.params.user_id;

  //   try {
  //     const user = await userRepository.findOneBy({ id: Number(user_id) });
  //     if (!user) {
  //       return res.status(404).json({ mensagem: "User not found" });
  //     }

  //     const Favorites = await favRepository.findBy({
  //       where: { id: Number(user_id) },
  //     });

  //     return res.status(201).json(Favorites);
  //   } catch (error) {
  //     console.log(error);
  //     return res.status(500).json({ mensagem: "Internal Server Error" });
  //   }
  // }
}
