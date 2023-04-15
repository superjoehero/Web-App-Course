import express from "express";
import chalk from "chalk";
import debug from "debug";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(chalk.blue(`Port: ${port}`));
  debug("Listening on port " + chalk.blue(" : " + port));
});
