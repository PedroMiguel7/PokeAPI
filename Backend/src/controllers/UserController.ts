import { BadRequestError } from "./../helpers/api-erros";
import { userRepository } from "./../repositories/userRepository";
import { Response } from "express";
import { Request } from "express";
import { favRepository } from "../repositories/favRepository";

export class UserController {
  async create(req: Request, res: Response) {
    const { nickname, email, password } = req.body;

    const newUser = userRepository.create({ nickname, email, password });
    await userRepository.save(newUser);

    return res.status(201).json(newUser);
  }

  async Favorite(req: Request, res: Response) {
    const { user_id } = req.params;
    const { pokemon_id } = req.body;

    const user = await userRepository.findOneBy({ id: Number(user_id) });

    if (!user) {
      throw new BadRequestError("User not found");
    }

    const newFav = favRepository.create({
      user_id: user_id,
      pokemon_id: pokemon_id,
    });

    await favRepository.save(newFav);

    return res.status(201).json(newFav);
  }

  // async listFav(req: Request, res: Response) {
  //   const { user_id } = req.params;

  //   const user = await userRepository.findOneBy({ id: Number(user_id) });
  //   if (!user) {
  //     throw new BadRequestError("User not found");
  //   }

  //   const Favorites = await favRepository.findBy({
  //     where: { user_id: Number(user_id) },
  //   });

  //   return res.status(201).json(Favorites);
  // }
}
