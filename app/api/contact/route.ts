import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);
}

export async function POST(req: Request) {
  let body;

  // Sécurité : parsing JSON avec try/catch
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Requête invalide" }, { status: 400 });
  }

  const { name, email, need, message } = body;

  // Vérification des champs
  if (!name || !email || !need || !message) {
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
      from: `"${escapeHtml(name)}" <${EMAIL_FROM}>`,
      to: EMAIL_TO,
      replyTo: email,
      subject: `📬 Demande backend — ${need}`,
      html: `
        <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
        <p><strong>Email :</strong> ${escapeHtml(email)}</p>
        <p><strong>Type de besoin :</strong> ${escapeHtml(need)}</p>
        <p><strong>Message :</strong><br>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json(
      { message: "Message envoyé avec succès" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Erreur nodemailer:", err);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}
