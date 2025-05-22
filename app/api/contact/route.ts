import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  // Vérification des champs obligatoires
  if (!name || !email || !message) {
    return NextResponse.json({ message: "Champs manquants" }, { status: 400 });
  }

  // Affiche les variables d'environnement dans le terminal (sans exposer le mot de passe)
  console.log("📧 EMAIL_FROM:", process.env.EMAIL_FROM);
  console.log("📧 EMAIL_TO:", process.env.EMAIL_TO);
  console.log("🔐 EMAIL_PASSWORD:", process.env.EMAIL_PASSWORD ? "✔️ OK" : "❌ MISSING");

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false, // STARTTLS
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Teste la connexion SMTP (facultatif mais utile en dev)
    await transporter.verify();
    console.log("✅ SMTP Outlook connecté avec succès");

    // Envoie de l'email
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // Nom affiché
      to: process.env.EMAIL_TO,
      subject: "📬 Nouveau message depuis le portfolio",
      html: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong><br>${message}</p>
      `,
    });

    return NextResponse.json({ message: "Message envoyé avec succès" }, { status: 200 });
  } catch (error: any) {
    console.error("❌ Erreur d'envoi complète :", error);
    return NextResponse.json({ message: "Erreur serveur", error: error.message }, { status: 500 });
  }
}
