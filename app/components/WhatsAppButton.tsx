export default function WhatsAppButton() {
  const numero = "5511946105612"; // Substitua pelo número real

  return (
    <a
      href={`https://wa.me/${numero}?text=${encodeURIComponent(
        "Olá! Gostaria de mais informações sobre os produtos da CROBOR.",
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Entre em contato com a CROBOR pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.78 11.78 0 0 0 12.13 0C5.6 0 .28 5.31.28 11.84c0 2.09.55 4.13 1.59 5.93L.18 24l6.38-1.67a11.84 11.84 0 0 0 5.56 1.42h.01c6.53 0 11.85-5.31 11.85-11.84a11.78 11.78 0 0 0-3.46-8.43ZM12.13 21.7h-.01a9.84 9.84 0 0 1-5.01-1.37l-.36-.21-3.79.99 1.01-3.69-.23-.38a9.82 9.82 0 0 1-1.51-5.2c0-5.43 4.43-9.85 9.89-9.85a9.8 9.8 0 0 1 6.98 2.89 9.8 9.8 0 0 1 2.89 6.98c0 5.43-4.43 9.84-9.86 9.84Zm5.42-7.38c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.07-.8.38-.28.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
      </svg>
    </a>
  );
}
