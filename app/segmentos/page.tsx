"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const segmentos = [
  {
    id: "ventosas-coladeiras",
    titulo: "Ventosas para Máquinas Coladeiras",
    descricao: [
      "As ventosas para máquinas coladeiras são componentes essenciais para a movimentação e o posicionamento de materiais durante processos industriais. Por meio da sucção, auxiliam no manuseio das peças, contribuindo para a precisão e a eficiência das operações.",
      "A CROBOR oferece soluções em ventosas voltadas às necessidades de máquinas coladeiras, considerando as características dos equipamentos e as exigências de cada aplicação. A escolha adequada contribui para um funcionamento confiável e para a continuidade do processo produtivo.",
      "Cada aplicação possui requisitos específicos. Por isso, fatores como o tipo de material, as condições de trabalho e as características do equipamento devem ser considerados na seleção da ventosa mais adequada.",
    ],
  },
  {
    id: "ventosas-metal-graficas",
    titulo: "Ventosas para Metalgráficas",
    descricao: [
      "As ventosas para metalgráficas auxiliam na movimentação, no manuseio e no posicionamento de chapas e outros materiais utilizados nos processos de fabricação metalgráfica.",
      "Esses componentes contribuem para a automação das operações industriais, ajudando a tornar o manuseio dos materiais mais eficiente e preciso.",
      "A escolha da ventosa deve considerar o material manipulado, as características do equipamento e as condições de operação para atender às necessidades de cada processo.",
    ],
  },
  {
    id: "perfis-borracha",
    titulo: "Perfis de Borracha Extrudados",
    descricao: [
      "Os perfis de borracha extrudados são utilizados em diferentes aplicações industriais que exigem vedação, acabamento ou proteção de componentes.",
      "Disponíveis em diferentes formatos e características, podem contribuir para a redução da entrada de poeira, a proteção de superfícies e a absorção de vibrações, conforme a aplicação.",
      "A escolha do perfil adequado depende do formato necessário, do material, das condições de uso e dos requisitos específicos de cada equipamento.",
    ],
  },
  {
    id: "sapatas-elevadores",
    titulo: "Sapatas para Elevadores Automotivos",
    descricao: [
      "As sapatas para elevadores automotivos são componentes instalados nos pontos de contato entre o elevador e o veículo, auxiliando no apoio durante as operações de elevação.",
      "Essas peças contribuem para o contato adequado com o veículo e ajudam a proteger as superfícies de apoio, conforme as características do produto e sua aplicação.",
      "Para selecionar a sapata correta, é importante considerar o modelo do elevador, as dimensões do ponto de apoio e os requisitos de utilização.",
    ],
  },
  {
    id: "vedacoes-flexograficas",
    titulo: "Vedações para Impressoras Flexográficas",
    descricao: [
      "As vedações para impressoras flexográficas são utilizadas em sistemas que precisam controlar o contato e a passagem de tintas e outros fluidos durante o processo de impressão.",
      "A escolha dos componentes de vedação adequados contribui para o funcionamento dos equipamentos e para a manutenção das condições necessárias ao processo produtivo.",
      "Para definir a solução mais apropriada, devem ser consideradas as características da impressora, o fluido em contato, o material da vedação e as condições de operação.",
    ],
  },
  {
    id: "aneis-vedacao",
    titulo: "Anéis de Vedação",
    descricao: [
      "Os anéis de vedação são componentes utilizados para ajudar a evitar vazamentos entre superfícies e peças de equipamentos industriais.",
      "Podem ser aplicados em diferentes sistemas e equipamentos, incluindo aplicações hidráulicas, pneumáticas e industriais, conforme as especificações do componente.",
      "A seleção do anel adequado depende de fatores como dimensões, material, pressão, temperatura e condições de utilização.",
    ],
  },
];

export default function SegmentosPage() {
  const [segmentoAberto, setSegmentoAberto] = useState<string | null>(null);

  useEffect(() => {
    const abrirPeloEndereco = () => {
      const id = window.location.hash.slice(1);

      if (segmentos.some((segmento) => segmento.id === id)) {
        setSegmentoAberto(id);

        window.setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    };

    abrirPeloEndereco();
    window.addEventListener("hashchange", abrirPeloEndereco);

    return () => {
      window.removeEventListener("hashchange", abrirPeloEndereco);
    };
  }, []);

  function alternarSegmento(id: string) {
    const novoId = segmentoAberto === id ? null : id;
    setSegmentoAberto(novoId);

    if (novoId) {
      window.history.replaceState(null, "", `/segmentos#${novoId}`);
    } else {
      window.history.replaceState(null, "", "/segmentos");
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      {/* Cabeçalho da página */}
      <div className="mx-auto mb-12 max-w-4xl text-center">
        <h1 className="mb-5 text-3xl font-bold text-[#292D78] md:text-5xl">
          Nossos Segmentos
        </h1>

        <p className="text-base leading-8 text-gray-700">
          Conheça as soluções da CROBOR para diferentes aplicações industriais.
          Selecione um segmento para conhecer os produtos e suas aplicações.
        </p>
      </div>

      {/* Lista de segmentos expansíveis */}
      <div className="mx-auto max-w-4xl space-y-4">
        {segmentos.map((segmento) => {
          const aberto = segmentoAberto === segmento.id;

          return (
            <section
              key={segmento.id}
              id={segmento.id}
              className="scroll-mt-24 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={() => alternarSegmento(segmento.id)}
                aria-expanded={aberto}
                aria-controls={`conteudo-${segmento.id}`}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-[#F7F7F5] md:px-6"
              >
                <span className="text-base font-bold text-[#292D78] md:text-lg">
                  {segmento.titulo}
                </span>

                <svg
                  className={`h-5 w-5 shrink-0 text-[#ED9F2D] transition-transform duration-200 ${
                    aberto ? "rotate-180" : ""
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

              {aberto && (
                <div
                  id={`conteudo-${segmento.id}`}
                  className="border-t border-gray-200 px-5 py-6 md:px-6"
                >
                  <div className="space-y-4 text-base leading-8 text-gray-700">
                    {segmento.descricao.map((paragrafo, index) => (
                      <p key={index}>{paragrafo}</p>
                    ))}
                  </div>

                  <div className="mt-6 border-l-4 border-[#ED9F2D] bg-[#F7F7F5] p-5">
                    <h2 className="mb-2 text-lg font-bold text-[#292D78]">
                      Encontre a solução ideal para sua aplicação
                    </h2>

                    <p className="mb-4 leading-relaxed text-gray-700">
                      Entre em contato com a equipe CROBOR para conversar sobre
                      as necessidades da sua operação.
                    </p>

                    <Link
                      href="/#contato"
                      className="inline-block rounded bg-[#292D78] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#ED9F2D]"
                    >
                      Fale com um especialista
                    </Link>
                  </div>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </main>
  );
}
