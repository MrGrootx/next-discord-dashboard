import { Request, Response } from "express";
import { getBotGuildsService } from "../../services/guilds";

export async function getGuildController(req: Request, res: Response) {
  try {
    const { data } = await getBotGuildsService();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error");
  }
}
