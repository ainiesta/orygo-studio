import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { nombre, email, proyecto, mensaje } = await req.json();

    if (!nombre || !email) {
      return NextResponse.json(
        { error: "Nombre y email son obligatorios" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Orygo Studio <onboarding@resend.dev>",
      to: "hola@orygo.studio",
      replyTo: email,
      subject: `Nuevo mensaje de ${nombre} — ${proyecto || "sin asunto"}`,
      html: `
        <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; color: #1A1A1A;">
          <div style="background: #0166FF; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Nuevo mensaje desde orygo.studio</h1>
          </div>
          <div style="background: #f9f9f9; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e5e5e5;">
            <p style="margin: 0 0 16px;"><strong>Nombre:</strong> ${nombre}</p>
            <p style="margin: 0 0 16px;"><strong>Email:</strong> <a href="mailto:${email}" style="color:#0166FF;">${email}</a></p>
            ${proyecto ? `<p style="margin: 0 0 16px;"><strong>Proyecto:</strong> ${proyecto}</p>` : ""}
            ${mensaje ? `
              <div style="margin-top: 24px; padding: 20px; background: white; border-radius: 6px; border: 1px solid #e0e0e0;">
                <p style="margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #999;">Mensaje</p>
                <p style="margin: 0; line-height: 1.6;">${mensaje.replace(/\n/g, "<br/>")}</p>
              </div>
            ` : ""}
            <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #e5e5e5;">
              <a href="mailto:${email}" style="background: #FF5C5D; color: white; padding: 10px 20px; border-radius: 4px; text-decoration: none; font-weight: bold; font-size: 14px;">
                Responder a ${nombre}
              </a>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}
