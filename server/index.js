import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import usersRoutes from "./routes/Users.js";


import dotenv from "dotenv";
const env = dotenv.config();

const app = express();

// app.use()
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({ origin: "http://localhost:3000" }));


const CONNECTION_URL = process.env.CONNECTION;
const PORT = process.env.PORT || 5005;


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((err) => console.log(err));
    

app.use("/user", usersRoutes);

app.use("/comments", usersRoutes);
app.use("/advert", usersRoutes); // uzman ilanı verme