import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  let body;

  // Sécurité : parsing JSON avec try/catch
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Requête invalide" }, { status: 400 });
  }

  const { name, email, message } = body;

  // Vérification des champs
  if (!name || !email || !message) {
    return NextResponse.json({ message: "Champs manquants" }, { status: 400 });
  }

  // Chargement des variables d'environnement
  const { EMAIL_FROM, EMAIL_PASSWORD, EMAIL_TO } = process.env;

  if (!EMAIL_FROM || !EMAIL_PASSWORD || !EMAIL_TO) {
    return NextResponse.json(
      { message: "Erreur de configuration du serveur" },
      { status: 500 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_FROM,
        pass: EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${EMAIL_FROM}>`,
      to: EMAIL_TO,
      replyTo: email,
      subject: "📬 Nouveau message depuis le portfolio",
      html: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong><br>${message}</p>
      `,
    });

    return NextResponse.json(
      { message: "Message envoyé avec succès" },
      { status: 200 }
    );
  } catch {
    // Ne pas exposer l'erreur dans la console
    console.error("Erreur lors de l'envoi du message.");
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}
