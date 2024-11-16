import express, { json } from "express";
import cors from "cors";
import { bot } from "./config/bot.js";
import { PORT } from "./config/constants.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import messageRouter from "./routes/messageRoutes.js";

async function main() {
  try {
    await bot.initialize();

    const app = express();

    app.use(json());
    app.use(cors());

    app.get("/", (req, res) => {
      res.send(`<h1>Glide server is running</h1>`);
    });

    app.use("/message", messageRouter);

    app.use((req, res, next) => {
      res.status(404).json({
        error: "Not Found",
      });
    });

    app.use(errorHandler);

    app.listen(PORT, () => {
      console.log(`Glide server running at port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

main();