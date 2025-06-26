import "dotenv/config";
import express from "express";
import cors from "cors";
import { router as starredRouter } from "./starred.routes.js";
import welcomeRouter from "./welcome.route.js";
import cronJob from './config/cron.js';

if (process.env.NODE_ENV == 'production') {
  cronJob.start();
}

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/starred", starredRouter);

app.use("/", welcomeRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));