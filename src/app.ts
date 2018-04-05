import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"

dotenv.config({ path: ".env" });

const app = express()
const port = 8000;

app.use(bodyParser.json());
app.set("port", process.env.PORT || port);

import * as homeController from "./controllers/home"

// For testing connection
app.get("/", homeController.index)

export default app