import { Response } from "express";
import { Request } from "express";
import { favRepository } from "../repositories/favRepository";
import { BadRequestError } from "./../helpers/api-erros";
import { userRepository } from "./../repositories/userRepository";

export class FavController {
  async Favorite(req: Request, res: Response) {
    try {
      const { user_id } = req.params;
      const { pokemon_id } = req.body;

      const user = await userRepository.findOneBy({ id: Number(user_id) });

      if (!user) {
        throw new BadRequestError("User not found");
      }

      const newFav = favRepository.create({
        user_id: Number(user_id),
        pokemon_id: pokemon_id,
      });

      await favRepository.save(newFav);

      return res.status(201).json(newFav);
    } catch (error: any) {
      res.status(400).json({ message: "Deu ruim" });
    }
  }

  async ListFav(req: Request, res: Response) {
    try {
      const { user_id } = req.params;

      const user = await userRepository.findOneBy({ id: Number(user_id) });
      if (!user) {
        throw new BadRequestError("User not found");
      }

      const Favorites = await favRepository.findBy({
        user_id: Number(user_id),
      });

      return res.status(201).json(Favorites);
    } catch (error: any) {
      res.status(400).json({ message: "Deu ruim" });
    }
  }

  async Updatefav(req: Request, res: Response) {
    try {
      const { id_pokemon, user_id } = req.params;
      const { pokemon_id } = req.body;

      const pokemon = await favRepository.findOneBy({
        user_id: Number(user_id),
        pokemon_id: Number(id_pokemon),
      });

      if (!pokemon) {
        throw new BadRequestError("Pokemon_fav not found");
      }

      let pokemonUpdate = pokemon;
      pokemonUpdate.pokemon_id = pokemon_id ? pokemon_id : pokemon.pokemon_id;

      favRepository.update(pokemonUpdate, pokemon);

      return res.status(200).json({ pokemonUpdate });
    } catch (error: any) {
      res.status(400).json({ message: "Deu ruim" });
    }
  }

  async Desfav(req: Request, res: Response) {
    try {
      const { pokemon_id, user_id } = req.params;

      const pokemon = await favRepository.findOneBy({
        user_id: Number(user_id),
        pokemon_id: Number(pokemon_id),
      });

      if (!pokemon) {
        throw new BadRequestError("Pokemon_fav not found");
      }

      favRepository.delete(pokemon.id);

      return res.status(200).json({ message: "sucess delete" });
    } catch (error: any) {
      res.status(400).json({ message: "Deu ruim" });
    }
  }
}
