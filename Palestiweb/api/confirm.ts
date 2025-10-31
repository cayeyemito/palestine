import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') return res.status(405).send("Method Not Allowed");

  const { token } = req.query;
  if (!token || typeof token !== "string") return res.status(400).send("Token inválido");

  try {
    const { data, error } = await supabase
      .from("subscribers")
      .update({ confirmed: true })
      .eq("token", token)
      .select("*");

    if (error || !data || data.length === 0) {
      return res.status(400).send("Token no encontrado");
    }

    res.status(200).send("Suscripción confirmada con éxito!");
  } catch (err) {
    console.error("Error confirmando la suscripción:", err);
    res.status(500).end();
  }
}
