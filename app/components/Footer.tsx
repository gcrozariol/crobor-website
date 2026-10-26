import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 bg-[#292D78] text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-10 px-5 py-10">
        {/* Logo e descrição */}
        <div className="flex flex-col gap-3">
          <Image src="/logo.svg" alt="Logo Crobor" width={150} height={50} />

          <p className="max-w-60 text-sm text-white/80">
            Soluções em peças técnicas de borracha desde 1993.
          </p>
        </div>

        {/* Links do site */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-bold uppercase text-[#ED9F2D]">
            Navegação
          </h3>

          <Link
            href="/"
            className="text-sm text-white/80 transition-colors hover:text-[#ED9F2D]"
          >
            Home
          </Link>

          <Link
            href="/#empresa"
            className="text-sm text-white/80 transition-colors hover:text-[#ED9F2D]"
          >
            Empresa
          </Link>

          <Link
            href="/#produtos"
            className="text-sm text-white/80 transition-colors hover:text-[#ED9F2D]"
          >
            Produtos
          </Link>

          <Link
            href="/segmentos"
            className="text-sm text-white/80 transition-colors hover:text-[#ED9F2D]"
          >
            Segmentos
          </Link>
        </div>

        {/* Contato */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-bold uppercase text-[#ED9F2D]">
            Contato
          </h3>

          <p className="text-sm text-white/80">
            Entre em contato com a CROBOR.
          </p>

          <Link
            href="/#contato"
            className="w-fit text-sm text-white/80 transition-colors hover:text-[#ED9F2D]"
          >
            Fale conosco
          </Link>
        </div>
      </div>

      {/* Direitos autorais */}
      <div className="border-t border-white/20 px-5 py-5 text-center">
        <p className="text-xs text-white/70">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold uppercase">CROBOR</span>. Todos os
          direitos reservados.
        </p>

        {/* Detalhe decorativo laranja */}
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#ED9F2D]" />
      </div>
    </footer>
  );
}
