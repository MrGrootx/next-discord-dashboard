import { config } from "dotenv";
config();

import express, { Express } from "express";
import routes from "./routes";
const app = express();

const PORT = process.env.PORT || 3001;

function createApp(): Express {
  const app = express();
  app.use("/api", routes);
  return app;
}

async function main() {
  console.log(`Running in ${process.env.ENVIROMENT} mode.`);
  try {
    const app = createApp();
    app.listen(PORT, () => console.log(`Running on ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

main();
