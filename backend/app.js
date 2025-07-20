import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRouter from "./routes/userRouter.js";
import errorHandler from "./middlewares/errorHandlerMiddleware.js";
import categoryRouter from "./routes/categoryRouter.js";
import transactionRouter from "./routes/transactionRouter.js";

dotenv.config();

const app = express();

import path from "path";

const _dir=path.resolve();
//!Connect to mongodb
mongoose
  .connect(`mongodb+srv://aryanraj:${process.env.DB_PASSWORD}@cluster1.bmawc5j.mongodb.net/mern-expenses`)
  .then(() => console.log("DB Connected"))
  .catch((e) => console.log(e));

//! Cors config
const corsOptions = {
  origin: ["http://localhost:5173"],
};
app.use(cors(corsOptions));
//!Middlewares
app.use(express.json()); //?Pass incoming json data
//!Routes
app.use("/", userRouter);
app.use("/", categoryRouter);
app.use("/", transactionRouter);

app.use(express.static(path.join(_dir,"/frontend/dist")));
app.get('*',(req,res)=>{
  res.sendFile(path.join(_dir,"frontend","dist","index.html"));
})
//! Error
app.use(errorHandler);



//!Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`Server is running on this port... ${PORT} `)
);
