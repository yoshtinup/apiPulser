import { MercadoPagoConfig, Preference } from 'mercadopago';
import dotenv from 'dotenv';

dotenv.config();

// Crear una instancia del cliente de Mercado Pago
const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN // Asegúrate de tener el token en el archivo .env
});

export const createPaymentPreference = async (item) => {
  try {
    // Crear una nueva preferencia de pago
    const preference = new Preference(client);
    const response = await preference.create({
      body: {
        items: [item],
        back_urls: {
          success: "https://www.tu-sitio.com/success",
          failure: "https://www.tu-sitio.com/failure",
          pending: "https://www.tu-sitio.com/pending"
        },
        auto_return: "approved"
      }
    });

    // Retornar el init_point y el sandbox_init_point
    return {
      init_point: response.body.init_point,
      sandbox_init_point: response.body.sandbox_init_point
    };
  } catch (error) {
    throw new Error(error.message);
  }
};
