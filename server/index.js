import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoutes from "./src/routes/authRoutes.js";
import settingsRoutes from "./src/routes/settingsRoutes.js";
import channelsRoutes from "./src/routes/channelsRoutes.js";
import { registerSocketServer } from "./src/io/io.js";

dotenv.config();

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();

app.use(express.json()); // We will get payload in JSON

app.use(cors());

app.get("/", (req, res) => {
  return res.send("Server us Running!");
});

// Assign route to path
app.use("/api/auth", authRoutes);
app.use("/api/channels", channelsRoutes);
app.use("/api/settings", settingsRoutes);

const server = http.createServer(app); // create server using HTTP module and we will pass app

registerSocketServer(server);

// Connect mongonDB server and run application
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Database connected and Server started`);
    });
  })
  .catch((err) => {
    console.log("Database connection failed. Server not started.");
    console.log(err);
  });
