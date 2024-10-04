import express from "express";
import signale from "signale";
import { loginRouter } from "./v1/router/loginRouter.js";
import { usuarioRouter } from "./v1/router/registroRouter.js";
import { historiRouter } from "./v1/router/historialRouter.js";
import mercadoPagoRouter from "./v1/router/mercadoPagoRouter.js";

import cors from "./node_modules/cors/lib/index.js";

const app = express()
app.use(cors());
app.use(express.json())
app.use("/api/v1/login",loginRouter);
app.use("/api/v1/registro",usuarioRouter);
app.use("/api/v1/historial",historiRouter);
app.use("/api/v1/mercado_pago", mercadoPagoRouter);

app.listen(3002, ()=> {
    signale.success("Server online in port 3002")
})