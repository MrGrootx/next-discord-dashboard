import { Request, Response } from "express";
import {
  getBotGuildsService,
  getMutualGuildsService,
  getUserGuildsService,
} from "../../services/guilds";
import { User } from "../../data-base/schemas/user";

export async function getGuildController(req: Request, res: Response) {
  const user = req.user as User;
  try {
    const guilds = await getMutualGuildsService(user.id);
    res.send({ guilds });
  } catch (error) {
    console.log(error);
    res.status(400).send("Error");
  }
}
