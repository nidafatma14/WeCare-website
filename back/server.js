import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", // Allow frontend access
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
//  Middleware to parse JSON
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.error("MongoDB Connection Error ❌", err));

//  Routes
app.use("/api/users", userRoutes);

//  Sample route
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
