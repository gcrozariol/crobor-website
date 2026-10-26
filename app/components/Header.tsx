import Image from "next/image";
import Link from "next/link";
import HeaderLink from "./HeaderLink";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        {/* Logo */}
        <Link href="/#home" aria-label="CROBOR - Página inicial">
          <Image
            src="/logo.svg"
            alt="Logo Crobor"
            width={180}
            height={60}
            priority
          />
        </Link>

        {/* Menu de navegação */}
        <nav className="flex flex-wrap items-center justify-center gap-6 font-bold">
          <HeaderLink label="home" href="/#home" />
          <HeaderLink label="empresa" href="/#empresa" />
          <HeaderLink label="produtos" href="/#catalogo" />
          <HeaderLink label="segmentos" href="/#produtos" />
          <HeaderLink label="contato" href="/#contato" />
        </nav>
      </div>
    </header>
  );
}
