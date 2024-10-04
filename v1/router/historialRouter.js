import express from 'express'
import signale from 'signale';

import { historiController } from '../controllers/historialController.js';

export const historiRouter = express.Router();


historiRouter.get("/", historiController.getAllProducts);
historiRouter.get("/:id", historiController.getOneProduct);
historiRouter.post("/", historiController.createNewProduct);
historiRouter.put("/:id",historiController.updateOneProduct);
historiRouter.delete("/:id",historiController.deleteOneProduct);