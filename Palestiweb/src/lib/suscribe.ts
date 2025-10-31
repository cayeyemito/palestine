// pages/api/subscribe.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email } = req.body;
    console.log("Email recibido:", email);

    // Aquí puedes guardar el email en tu base de datos o enviarlo a Mailchimp, SendGrid, etc.
    return res.status(200).json({ message: "Email recibido" });
  }
  res.status(405).json({ message: "Method not allowed" });
}
