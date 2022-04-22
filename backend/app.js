import cookieParser from "cookie-parser";
import express from "express";
import { userRoute } from "./routes/User.js";
import path from "path";

export const app = express();


app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());

app.use("/api/v1", userRoute)

app.use(express.static(path.resolve("./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve("./client/build/index.html"));
});