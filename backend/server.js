import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import { router } from "./routes/productRoute.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1", router);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
  connectDB();
});
