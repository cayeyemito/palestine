// server.ts
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import formData from "form-data"
import Mailgun from "mailgun.js"
import { createClient } from "@supabase/supabase-js"

dotenv.config()

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

const app = express()
app.use(cors())
app.use(express.json())

const mailgun = new Mailgun(formData)
const mg = mailgun.client({ username: "api", key: process.env.MAILGUN_API_KEY! })

app.post("/api/subscribe", async (req, res) => {
  const { email } = req.body

  if (!email) return res.status(400).json({ error: "Falta el email" })

  // Generar token único para confirmación
  const token = crypto.randomUUID()

  const confirmUrl = `https://palestine-fawn.vercel.app/api/confirm?token=${token}`
  console.log("URL de confirmación:", confirmUrl)

  try {
    // Insertar en Supabase con confirm = false por defecto
    const { data, error } = await supabase
      .from("subscribers")
      .insert([{ email, token, confirmed: false }])
      .select("*")

    if (error || !data) {
      console.error(error)
      return res.status(500).json({ error: "No se pudo registrar el email" })
    }

    // Enviar correo con Mailgun
    await mg.messages.create("sandboxec21462a958847e99a2637292e0349ca.mailgun.org", {
      from: "Tu App <no-reply@sandboxec21462a958847e99a2637292e0349ca.mailgun.org>",
      to: email,
      subject: "Confirma tu suscripción a nuestro boletín",
      // HTML
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
        <h2 style="color: #333;">¡Gracias por suscribirte!</h2>
        <p style="color: #555; font-size: 16px; line-height: 1.5;">
          Hemos recibido tu solicitud de suscripción. Para confirmar que realmente deseas recibir nuestras noticias y actualizaciones, haz click en el botón de abajo:
        </p>
        <a href="${confirmUrl} target="_blank" "
          style="
            background-color:#007bff;
            color:#ffffff;
            text-decoration:none;
            padding:12px 24px;
            font-weight:bold;
            border-radius:6px;
            display:inline-block;
          "
        >
          Confirmar suscripción
        </a>
        <p style="color: #555; font-size: 14px;">Si no puedes hacer click en el botón, copia y pega esta URL en tu navegador:</p>
        <p style="color: #007bff; word-break: break-all;">${confirmUrl}</p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p style="color: #888; font-size: 12px;">Si no solicitaste esta suscripción, ignora este correo.</p>
      </div>
      `,
      // Texto plano
      text: `¡Gracias por suscribirte!

    Para confirmar tu suscripción, copia y pega este enlace en tu navegador:
    ${confirmUrl}

    Si no solicitaste esta suscripción, ignora este correo.`
    })

    res.json({ ok: true, subscriber: data[0] })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Hubo un error enviando el correo" })
  }
})

app.get("/api/confirm", async (req, res) => {
  const { token } = req.query
  if (!token || typeof token !== "string") return res.status(400).send("Token inválido")

  try {
    const { data, error } = await supabase
      .from("subscribers")
      .update({ confirmed: true })
      .eq("token", token)
      .select("*")

    if (error || !data || data.length === 0) {
      return res.status(400).send("Token no encontrado")
    }

    // ✅ Aquí solo indicamos que todo salió bien
    res.status(200).end()
  } catch (err) {
    console.error("Error confirmando la suscripción:", err)
    res.status(500).end()
  }
})

app.listen(3000, () => console.log("Backend corriendo en https://palestine-fawn.vercel.app"))
