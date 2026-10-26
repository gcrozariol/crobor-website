import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Serviço de e-mail não configurado." },
        { status: 500 },
      );
    }

    const dados = await request.json();

    const { nome, email, telefone, assunto, mensagem } = dados;

    if (!nome || !email || !telefone || !assunto || !mensagem) {
      return NextResponse.json(
        { error: "Preencha todos os campos." },
        { status: 400 },
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "CROBOR <onboarding@resend.dev>",
      to: ["mandycrozariol@gmail.com"],
      replyTo: email,
      subject: `Contato pelo site CROBOR: ${assunto}`,
      text: `
Nome: ${nome}
E-mail: ${email}
Telefone: ${telefone}
Assunto: ${assunto}

Mensagem:
${mensagem}
      `,
    });

    if (error) {
      console.error("Erro ao enviar e-mail:", error);

      return NextResponse.json(
        { error: "Não foi possível enviar sua mensagem." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro na API de contato:", error);

    return NextResponse.json(
      { error: "Ocorreu um erro ao enviar sua mensagem." },
      { status: 500 },
    );
  }
}
