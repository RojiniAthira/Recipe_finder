import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routers/users.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

mongoose.connect(
  "mongodb+srv://dbUser3154:Athi3154@recipes.u0ahswo.mongodb.net/recipes?retryWrites=true&w=majority&appName=recipes"
);

app.listen(3001, () => console.log("SERVER STARTED"));
