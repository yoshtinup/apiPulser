import express from 'express'
import signale from 'signale';

import { loginController } from '../controllers/loginController.js';

export const loginRouter = express.Router();


loginRouter.get("/", loginController.getAllProducts);
loginRouter.get("/:id", loginController.getOneProduct);
loginRouter.post("/", loginController.createNewProduct);
loginRouter.put("/:id",loginController.updateOneProduct);
loginRouter.delete("/:id",loginController.deleteOneProduct);