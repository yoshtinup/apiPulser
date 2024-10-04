import express from 'express';
import { createPreference } from '../controllers/mercadoPagoController.js';

const mercadoPagoRouter = express.Router();

mercadoPagoRouter.post('/preferencia', createPreference);

export default mercadoPagoRouter;
