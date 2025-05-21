import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ message: "Champs manquants" }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false, // STARTTLS
      auth: {
        user: process.env.EMAIL_FROM,     // exemple : yeslife@outlook.fr
        pass: process.env.EMAIL_PASSWORD, // mot de passe de ton compte Outlook
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`, // expéditeur visible
      to: process.env.EMAIL_TO,     // ton adresse outlook
      subject: "📬 Nouveau message depuis le portfolio",
      html: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong><br>${message}</p>
      `,
    });

    return NextResponse.json({ message: "Message envoyé avec succès" }, { status: 200 });
  } catch (error) {
    console.error("Erreur d'envoi :", error);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}
