import Contato from "./Api/Contato";
import LinkContato from "./components/LinkContato";
import WhatsAppButton from "./components/WhatsAppButton";
import SegmentosHome from "./components/SegmentosHome";

export default function Home() {
  return (
    <main>
      {/* Início / Banner principal */}
      <section
        id="home"
        className="flex min-h-\[450px] flex-col items-start justify-center bg-cover bg-center px-5 py-20 text-left md:px-16"
        style={{ backgroundImage: "url('/crobor-banner.png')" }}
      >
        {/* Título */}

        <h1 className="mb-4 w-fit max-w-full rounded-sm px-4 py-2 text-3xl font-bold text-[#292D78] md:text-5xl">
          Precisão que protege
          <br />o seu <span className="text-[#ED9F2D]">negócio.</span>
        </h1>

        {/* Descrição */}
        <p className="mb-8 max-w-3xl rounded-sm px-4 py-2 text-sm leading-relaxed text-gray-700 md:text-xl">
          Peças técnicas em borracha desenvolvidas para entregar
          <br />
          desempenho, durabilidade e confiança em cada aplicação.
        </p>
        <a
          href="#contato"
          className="ml-3 rounded bg-[#ED9F2D] px-8 py-4 font-bold text-white transition-colors hover:bg-[#292D78]"
        >
          Fale com um especialista
        </a>
      </section>
      {/* Empresa */}
      <section id="empresa" className="bg-[#F7F7F5] px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          {/* Lado esquerdo: título */}
          <div>
            <h2 className="text-3xl font-bold leading-tight text-[#292D78] md:text-5xl">
              Experiência técnica
              <br />
              <span className="text-[#ED9F2D]">que gera resultado.</span>
            </h2>
          </div>

          {/* Lado direito: descrição e indicadores */}
          <div>
            <p className="text-sm leading-relaxed text-gray-700">
              Fundada em 1993, a CROBOR atua no mercado de peças técnicas em
              borracha, oferecendo produtos desenvolvidos com rigoroso controle
              de qualidade e em conformidade com as especificações previamente
              aprovadas por seus clientes.
            </p>

            <div className="mt-8 flex flex-wrap gap-10">
              <div>
                <p className="text-4xl font-bold text-[#292D78] md:text-5xl">
                  30<span className="text-[#ED9F2D]">+</span>
                </p>
                <p className="mt-2 text-base font-medium text-gray-600">
                  anos de experiência
                </p>
              </div>

              <div>
                <p className="text-4xl font-bold text-[#292D78] md:text-5xl">
                  100<span className="text-[#ED9F2D]">%</span>
                </p>
                <p className="mt-2 text-base font-medium text-gray-600">
                  foco no cliente
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segmentos */}
      <SegmentosHome />

      {/* Seção Catálogo */}
      <section id="catalogo" className="bg-[#F7F7F5] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Título e descrição */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold leading-tight text-[#292D78] md:text-5xl">
              Peças feitas
              <br />
              <span className="text-[#ED9F2D]">para durar.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-700">
              Do perfil extrudado à peça moldada, cada solução parte de uma
              necessidade real e de uma especificação aprovada.
            </p>
          </div>

          {/* Cards do catálogo */}
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Card 01 */}
            <div className="flex flex-col border border-gray-200 bg-white p-6 md:p-8">
              <span className="mb-6 text-sm font-semibold text-[#ED9F2D]">
                01
              </span>

              <h3 className="text-2xl font-bold text-[#292D78]">
                Perfis extrudados
              </h3>

              <p className="mt-2 font-medium text-gray-500">
                EPDM · NBR · Silicone
              </p>

              <p className="mt-4 flex-grow leading-relaxed text-gray-700">
                Geometrias sob medida para acabamento, vedação e proteção.
              </p>

              <LinkContato />
            </div>

            {/* Card 02 */}
            <div className="flex flex-col border border-gray-200 bg-white p-6 md:p-8">
              <span className="mb-6 text-sm font-semibold text-[#ED9F2D]">
                02
              </span>

              <h3 className="text-2xl font-bold text-[#292D78]">
                Peças moldadas
              </h3>

              <p className="mt-2 font-medium text-gray-500">
                Conforme desenho técnico
              </p>

              <p className="mt-4 flex-grow leading-relaxed text-gray-700">
                Componentes técnicos fabricados conforme desenho e
                especificação.
              </p>

              <LinkContato />
            </div>

            {/* Card 03 */}
            <div className="flex flex-col border border-gray-200 bg-white p-6 md:p-8">
              <span className="mb-6 text-sm font-semibold text-[#ED9F2D]">
                03
              </span>

              <h3 className="text-2xl font-bold text-[#292D78]">
                Vedações industriais
              </h3>

              <p className="mt-2 font-medium text-gray-500">
                Alta resistência e precisão
              </p>

              <p className="mt-4 flex-grow leading-relaxed text-gray-700">
                Confiabilidade para aplicações que exigem resistência e
                precisão.
              </p>

              <LinkContato />
            </div>

            {/* Card 04 */}
            <div className="flex flex-col border border-gray-200 bg-white p-6 md:p-8">
              <span className="mb-6 text-sm font-semibold text-[#ED9F2D]">
                04
              </span>

              <h3 className="text-2xl font-bold text-[#292D78]">
                Ventosas técnicas
              </h3>

              <p className="mt-2 font-medium text-gray-500">
                Máquinas coladeiras
              </p>

              <p className="mt-4 flex-grow leading-relaxed text-gray-700">
                Aderência e desempenho para linhas de produção contínua.
              </p>
              <LinkContato />
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <Contato />

      {/* WhatsApp*/}
      <WhatsAppButton />
    </main>
  );
}
