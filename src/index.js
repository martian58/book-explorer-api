import "dotenv/config";
import express from "express";
import cors from "cors";
import { router as starredRouter } from "./starred.routes.js";
import welcomeRouter from "./welcome.route.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/starred", starredRouter);

app.use("/", welcomeRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));