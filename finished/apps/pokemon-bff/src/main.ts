/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from "express";
import cors from "cors";
import * as path from "path";

import pokemon from "./pokemon.json";

const app = express();

app.use(cors());

app.use("/assets", express.static(path.join(__dirname, "assets")));

app.get("/api", (req, res) => {
  if (req.query.search) {
    const search = req.query.search as string;
    res.send(
      pokemon
        .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
        .slice(0, 20)
    );
    return;
  } else {
    res.send(pokemon.slice(0, 20));
  }
});

app.get("/api/:id", (req, res) => {
  res.send(pokemon.find((p) => p.id === +req.params.id));
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on("error", console.error);
