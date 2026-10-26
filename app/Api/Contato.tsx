"use client";

import { useState } from "react";

export default function Contato() {
  const [enviando, setEnviando] = useState(false);
  const [status, setStatus] = useState("");

  async function enviarFormulario(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formulario = event.currentTarget;
    const dados = new FormData(formulario);

    const contato = {
      nome: dados.get("nome"),
      email: dados.get("email"),
      telefone: dados.get("telefone"),
      assunto: dados.get("assunto"),
      mensagem: dados.get("mensagem"),
    };

    setEnviando(true);
    setStatus("");

    try {
      const resposta = await fetch("/api/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contato),
      });

      const resultado = await resposta.json();

      if (!resposta.ok) {
        throw new Error(
          resultado.error || "Não foi possível enviar a mensagem.",
        );
      }

      setStatus("Mensagem enviada com sucesso! Obrigado pelo contato.");
      formulario.reset();
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Erro ao enviar. Tente novamente.",
      );
    } finally {
      setEnviando(false);
    }
  }

  return (
    <section id="contato" className="bg-[#F7F7F5] px-6 py-20 md:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-start">
        <div className="md:pt-8">
          <h2 className="mb-6 text-3xl font-bold leading-tight text-[#292D78] md:text-5xl">
            Seu desafio pede
            <br />
            <span className="text-[#ED9F2D]">uma solução técnica.</span>
          </h2>

          <p className="max-w-lg text-base leading-relaxed text-gray-700">
            Conte para nós o que você precisa. Nossa equipe está pronta para
            ajudar.
          </p>
        </div>

        <div className="w-full">
          <form onSubmit={enviarFormulario} className="flex flex-col gap-3">
            <label htmlFor="nome">Nome</label>
            <input
              id="nome"
              name="nome"
              type="text"
              placeholder="Digite seu nome"
              required
              className="rounded border border-gray-300 bg-white p-3"
            />

            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Digite seu e-mail"
              required
              className="rounded border border-gray-300 bg-white p-3"
            />

            <label htmlFor="telefone">Telefone</label>
            <input
              id="telefone"
              name="telefone"
              type="tel"
              placeholder="Digite seu telefone"
              required
              className="rounded border border-gray-300 bg-white p-3"
            />

            <label htmlFor="assunto">Assunto</label>
            <input
              id="assunto"
              name="assunto"
              type="text"
              placeholder="Como podemos ajudar?"
              required
              className="rounded border border-gray-300 bg-white p-3"
            />

            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={5}
              placeholder="Escreva sua mensagem"
              required
              className="rounded border border-gray-300 bg-white p-3"
            />

            <button
              type="submit"
              disabled={enviando}
              className="mt-3 rounded bg-[#292D78] p-3 font-bold text-white transition-colors hover:bg-[#ED9F2D] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {enviando ? "Enviando..." : "Enviar mensagem"}
            </button>

            {status && (
              <p
                role="status"
                aria-live="polite"
                className="mt-2 text-base text-gray-700"
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
