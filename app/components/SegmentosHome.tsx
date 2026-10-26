"use client";

import { useState } from "react";
import Link from "next/link";

const segmentos = [
  {
    id: "ventosas-coladeiras",
    titulo: "Ventosas para Máquinas Coladeiras",
    descricao:
      "Componentes para movimentação e posicionamento de materiais em máquinas coladeiras. A escolha adequada considera o material manipulado, as características do equipamento e as condições de operação.",
  },
  {
    id: "ventosas-metal-graficas",
    titulo: "Ventosas para Metalgráficas",
    descricao:
      "Soluções para auxiliar na movimentação e no posicionamento de chapas e outros materiais utilizados em processos metalgráficos, considerando as exigências de cada aplicação.",
  },
  {
    id: "perfis-borracha",
    titulo: "Perfis de Borracha Extrudados",
    descricao:
      "Perfis utilizados em aplicações industriais que exigem vedação, acabamento ou proteção de componentes. O formato e o material devem atender às necessidades de cada aplicação.",
  },
  {
    id: "sapatas-elevadores",
    titulo: "Sapatas para Elevadores Automotivos",
    descricao:
      "Componentes de apoio para elevadores automotivos. A seleção considera o modelo do elevador, as dimensões dos pontos de contato e as condições de utilização.",
  },
  {
    id: "vedacoes-flexograficas",
    titulo: "Vedações para Impressoras Flexográficas",
    descricao:
      "Componentes de vedação para aplicações em impressoras flexográficas, selecionados conforme o equipamento, o fluido em contato e as condições de operação.",
  },
  {
    id: "aneis-vedacao",
    titulo: "Anéis de Vedação",
    descricao:
      "Componentes utilizados para ajudar a evitar vazamentos em diferentes sistemas industriais. A escolha depende das dimensões, do material e das condições de trabalho.",
  },
];

export default function SegmentosHome() {
  const [aberto, setAberto] = useState<string | null>(null);

  return (
    <section
      id="produtos"
      className="scroll-mt-24 bg-white px-5 py-16 md:py-20"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        {/* Coluna esquerda: título e descrição */}
        <div className="md:sticky md:top-32">
          <h2 className="mb-5 text-3xl font-bold text-[#292D78] md:text-5xl">
            Nossos Segmentos
          </h2>

          <p className="text-base leading-8 text-gray-700">
            Conheça as soluções da CROBOR para diferentes aplicações
            industriais. Selecione um segmento para saber mais.
          </p>
        </div>

        {/* Coluna direita: dropdowns */}
        <div className="space-y-4">
          {segmentos.map((segmento, index) => {
            const expandido = aberto === segmento.id;

            return (
              <div
                key={segmento.id}
                className={`overflow-hidden rounded-xl border bg-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  expandido
                    ? "border-[#ED9F2D]/60 shadow-lg shadow-[#292D78]/10"
                    : "border-gray-200 shadow-sm hover:-translate-y-0.5 hover:shadow-md"
                }`}
              >
                {/* Cabeçalho */}
                <button
                  type="button"
                  aria-expanded={expandido}
                  aria-controls={`conteudo-${segmento.id}`}
                  onClick={() => setAberto(expandido ? null : segmento.id)}
                  className="group flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors duration-300 hover:bg-[#F7F7F5] md:px-6"
                >
                  <span className="flex items-center gap-4">
                    <span
                      className={`text-sm font-bold tracking-wider transition-colors duration-300 ${
                        expandido ? "text-[#ED9F2D]" : "text-[#ED9F2D]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-base font-bold text-[#292D78] transition-colors duration-300 group-hover:text-[#ED9F2D] md:text-lg">
                      {segmento.titulo}
                    </span>
                  </span>

                  {/* Seta animada */}
                  <svg
                    className={`h-5 w-5 shrink-0 text-[#ED9F2D] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      expandido ? "rotate-180 scale-110" : "rotate-0 scale-100"
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="m6 9 6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Conteúdo com expansão suave */}
                <div
                  id={`conteudo-${segmento.id}`}
                  aria-hidden={!expandido}
                  className={`grid transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    expandido
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="border-t border-gray-200 px-5 py-6 md:px-6">
                      {/* Descrição */}
                      <p
                        className={`leading-8 text-gray-700 transition-all duration-500 ease-out ${
                          expandido
                            ? "translate-y-0 scale-100 opacity-100 delay-100"
                            : "translate-y-4 scale-[0.98] opacity-0"
                        }`}
                      >
                        {segmento.descricao}
                      </p>

                      {/* Caixa de contato */}
                      <div
                        className={`mt-6 origin-top border-l-4 border-[#ED9F2D] bg-[#F7F7F5] p-5 transition-all duration-500 ease-out ${
                          expandido
                            ? "translate-y-0 scale-100 opacity-100 delay-200"
                            : "translate-y-4 scale-[0.98] opacity-0"
                        }`}
                      >
                        <h3 className="mb-2 text-lg font-bold text-[#292D78]">
                          Encontre a solução ideal para sua aplicação
                        </h3>

                        <p className="mb-4 leading-relaxed text-gray-700">
                          Entre em contato com a equipe CROBOR para conversar
                          sobre as necessidades da sua operação.
                        </p>

                        <Link
                          href="/#contato"
                          tabIndex={expandido ? 0 : -1}
                          className="inline-block rounded bg-[#292D78] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ED9F2D]"
                        >
                          Fale com um especialista
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
