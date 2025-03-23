// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Champs manquants" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // ou "hotmail", "outlook", etc.
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_RECEIVER, // Où tu veux recevoir le message
      subject: "Nouveau message via portfolio",
      text: message,
      html: `<p><strong>Nom :</strong> ${name}</p><p><strong>Email :</strong> ${email}</p><p><strong>Message :</strong><br>${message}</p>`,
    });

    res.status(200).json({ message: "Message envoyé" });
  } catch (error) {
    console.error("Erreur d'envoi :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
}
