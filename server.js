import express from "express";
import signale from "signale";
import dotenv from 'dotenv';

import { loginRouter } from "./v1/router/loginRouter.js";
import { usuarioRouter } from "./v1/router/registroRouter.js";
import { historiRouter } from "./v1/router/historialRouter.js";
import sencdrouter from "./v1/router/twilioRouter.js";
dotenv.config();

import cors from "./node_modules/cors/lib/index.js";

const app = express()
app.use(cors());
app.use(express.json())
app.use("/api/v1/login",loginRouter);
app.use("/api/v1/registro",usuarioRouter);
app.use("/api/v1/historial",historiRouter);
app.use('/api/v1/twilio', sencdrouter);

app.listen(3002, ()=> {
    signale.success("Server online in port 3002")
})