// /functions/add_to_auth/index.ts
import { createClient } from "@supabase/supabase-js";
import crypto from "crypto";

// Cliente Supabase con service_role key (importante que sea privada)
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: "Falta el email" });

    // Crear usuario en Supabase Auth
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password: crypto.randomUUID(),
      email_confirm: true,
    });

    if (error) {
      console.error("Error creando usuario:", error);
      return res.status(500).json({ error: "Error creando usuario", details: error });
    }

    console.log("Usuario creado correctamente:", data);

    return res.status(200).json({ ok: true, user: data });
  } catch (err) {
    console.error("Error interno:", err);
    return res.status(500).json({ error: "Error interno", details: err });
  }
}
