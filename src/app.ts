/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-unreachable */
import express from "express";

import { routerUser } from "./user.router";

const app = express();

app.use(express.json());

// app.use("/", (req, res, next) => {
//   if (req.originalUrl === "/") {
//     res.send("Service is running!");
//     return;
//   }
//   next();
// });

app.use("/users", routerUser);

export { app };
