import { Request, Response, Router } from "express";
import { User } from "./entity/User";
import { postUserMemory, getAllMemory } from "./user.memory.repository";

const routerUser = Router();

routerUser.route("/").get(async (_req: Request, res: Response) => {
  const users = await getAllMemory();
  res.json(users);
});

routerUser.route("/").post(async (req: Request, res: Response) => {
  const createUser = req.body;

  const usersPost = await postUserMemory(createUser);
  if (usersPost !== undefined) {
    res.status(201).json(usersPost);
  } else {
    res.status(404).json();
  }
});

export { routerUser };
