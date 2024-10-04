import { createPaymentPreference } from '../services/mercadoPagoService.js';

export const createPreference = async (req, res) => {
  try {
    const item = {
      title: req.body.title,
      unit_price: req.body.price,
      quantity: 1,
    };

    const preference = await createPaymentPreference(item);

    // Devolver tanto el init_point como el sandbox_init_point
    res.status(200).json({
      init_point: preference.init_point,
      sandbox_init_point: preference.sandbox_init_point
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
