"use client";

import Link from "next/link";

export default function LinkContato() {
  function irParaContato() {
    const contato = document.getElementById("contato");

    if (contato) {
      contato.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <Link
      href="/#contato"
      onClick={(event) => {
        event.preventDefault();
        irParaContato();
      }}
      className="mt-6 w-fit font-bold text-[#292D78] transition-colors hover:text-[#ED9F2D]"
    >
      Solicitar peça ↗
    </Link>
  );
}
