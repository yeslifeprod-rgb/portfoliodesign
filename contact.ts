import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Tous les champs sont requis" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // 🔹 Utilise Gmail ou un service SMTP
      auth: {
        user: process.env.EMAIL_USER, // 🔹 Email d'envoi (défini dans .env)
        pass: process.env.EMAIL_PASS, // 🔹 Mot de passe (défini dans .env)
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_RECEIVER, // 🔹 Ton email de réception
      subject: "Nouveau message de contact",
      text: message,
      html: `<p><strong>Nom:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return res.status(200).json({ message: "Email envoyé avec succès" });
  } catch (error) {
    console.error("Erreur d'envoi:", error);
    return res.status(500).json({ message: "Erreur lors de l'envoi du message" });
  }
}
