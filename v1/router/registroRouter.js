import express from 'express'
import signale from 'signale';

import { usuarioController } from '../controllers/registroController.js';
export const usuarioRouter = express.Router();

usuarioRouter.get("/", usuarioController.getAllProducts);
usuarioRouter.get("/:id", usuarioController.getOneProduct);
usuarioRouter.post("/", usuarioController.createNewProduct);
usuarioRouter.put("/:id",usuarioController.updateOneProduct);
usuarioRouter.delete("/:id",usuarioController.deleteOneProduct);