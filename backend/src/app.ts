import express from "express";
import cors from "cors";
import { env } from "./config/env.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "SmileVault backend is running",
  });
});

app.listen(env.PORT, () => {
  console.log(`Server running on port ${env.PORT}`);
});
