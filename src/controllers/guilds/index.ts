import { Request, Response } from "express";
import {
  getBotGuildsService,
  getUserGuildsService,
} from "../../services/guilds";
import { User } from "../../data-base/schemas/user";

export async function getGuildController(req: Request, res: Response) {
  const user = req.user as User;
  try {
    const { data: botGuilds } = await getBotGuildsService();
    const { data: userGuilds } = await getUserGuildsService(user.id);
    res.send({
      botGuilds,
      userGuilds,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send("Error");
  }
}
