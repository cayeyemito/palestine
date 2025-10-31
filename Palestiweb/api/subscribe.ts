import { createClient } from '@supabase/supabase-js';
import Mailgun from 'mailgun.js';
import formData from 'form-data';
import dotenv from 'dotenv';
import crypto from 'crypto';

dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

const mailgun = new Mailgun(formData);
const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY! });

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).send("Method Not Allowed");

  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Falta el email" });

  const token = crypto.randomUUID();
  const confirmUrl = `https://palestine-fawn.vercel.app/?token=${token}`;

  try {
    // Insertar en Supabase
    const { data, error } = await supabase
      .from('subscribers')
      .insert([{ email, token, confirmed: false }])
      .select('*');

    if (error || !data) return res.status(500).json({ error: "No se pudo registrar el email" });

    // Enviar correo
    await mg.messages.create("sandboxec21462a958847e99a2637292e0349ca.mailgun.org", {
      from: "Tu App <no-reply@sandboxec21462a958847e99a2637292e0349ca.mailgun.org>",
      to: email,
      subject: "Confirma tu suscripción a nuestro boletín",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
          <h2 style="color: #333;">¡Gracias por suscribirte!</h2>
          <p style="color: #555; font-size: 16px; line-height: 1.5;">
            Haz click en el botón de abajo para confirmar tu suscripción:
          </p>
          <a href="${confirmUrl}" 
            style="display: inline-block; margin: 20px 0; padding: 12px 24px; background-color: #007bff; color: white; text-decoration: none; border-radius: 6px; font-weight: bold;">
            Confirmar suscripción
          </a>
          <p style="color: #555; font-size: 14px;">Si no puedes hacer click en el botón, copia y pega esta URL:</p>
          <p style="color: #007bff; word-break: break-all;">${confirmUrl}</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #888; font-size: 12px;">Si no solicitaste esta suscripción, ignora este correo.</p>
        </div>
      `,
      text: `¡Gracias por suscribirte!\n\nConfirma tu suscripción con este enlace:\n${confirmUrl}\n\nSi no solicitaste esta suscripción, ignora este correo.`
    });

    res.status(200).json({ ok: true, subscriber: data[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Hubo un error enviando el correo" });
  }
}
