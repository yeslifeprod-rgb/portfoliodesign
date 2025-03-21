import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: "Champs manquants" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: `📬 Nouveau message de ${name}`,
      html: `<p><strong>Email :</strong> ${email}</p><p><strong>Message :</strong> ${message}</p>`,
    });

    return NextResponse.json({ message: "Message envoyé avec succès" }, { status: 200 });
  } catch (err) {
    console.error("Erreur envoi mail :", err);
    return NextResponse.json({ message: "Erreur lors de l'envoi du message." }, { status: 500 });
  }
}
