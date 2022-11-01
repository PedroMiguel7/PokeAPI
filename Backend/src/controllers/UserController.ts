import { BadRequestError } from "./../helpers/api-erros";
import { userRepository } from "./../repositories/userRepository";
import { Response } from "express";
import { Request } from "express";
import { favRepository } from "../repositories/favRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class UserController {
  async Login(req: Request, res: Response) {
    try {
      const { nickname, email, password } = req.body;

      const user = await userRepository.findOneBy({ email });
      if (!user) {
        throw new Error("Invalid email or password");
      }

      const varifypass = await bcrypt.compare(password, user.password);
      if (!varifypass) {
        throw new Error("Invalid email or password");
      }

      const token = jwt.sign(
        { id: user.id, nickname: user.nickname, email: user.email },
        process.env.JWT_PASS ?? "",
        { expiresIn: "8h" }
      );

      return res.status(200).json({ token });
    } catch (error: any) {
      res.status(400).json({ message: "Deu ruim" });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { nickname, email, password } = req.body;

      const userExist = await userRepository.findOneBy({ email });
      const userExist2 = await userRepository.findOneBy({ nickname });

      if (userExist) {
        throw new BadRequestError("Email already exists");
      }
      if (userExist2) {
        throw new BadRequestError("Nickname already exists");
      }

      const criptopass = await bcrypt.hash(password, 10);

      const newUser = userRepository.create({
        nickname,
        email,
        password: criptopass,
      });

      await userRepository.save(newUser);

      const { password: _, ...user } = newUser;

      return res.status(201).json(user);
    } catch (error: any) {
      res.status(400).json({ message: "Deu ruim" });
    }
  }

  async dellUser(req: Request, res: Response) {
    try {
      const { user_id } = req.params;
      const user = await userRepository.findOneBy({ id: Number(user_id) });
      if (!user) {
        throw new BadRequestError("User not found");
      }
      userRepository.delete(user_id);
      return res.status(200).json({ message: "sucess delete" });
    } catch (error: any) {
      res.status(400).json({ message: "Deu ruim" });
    }
  }

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

  async listFav(req: Request, res: Response) {
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
