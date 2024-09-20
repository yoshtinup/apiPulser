import express from "express";
import signale from "signale";
import { loginRouter } from "./v1/router/loginRouter.js";
import { usuarioRouter } from "./v1/router/registroRouter.js";


import cors from "./node_modules/cors/lib/index.js";

const app = express()
app.use(cors());
app.use(express.json())
app.use("/api/login",loginRouter);
app.use("/api/registro",usuarioRouter);


app.listen(3002, ()=> {
    signale.success("Server online in port 3002")
})