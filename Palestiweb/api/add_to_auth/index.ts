import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

export default async function handler(req: any, res: any) {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).send("Falta email");

    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password: crypto.randomUUID(),
      email_confirm: true,
    });

    if (error) return res.status(500).send("Error creando usuario");

    return res.status(200).json({ ok: true, user: data });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error interno");
  }
}
