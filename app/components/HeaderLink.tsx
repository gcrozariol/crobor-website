import Link from "next/link";

type HeaderLinkProps = {
  label: string;
  href: string;
};

export default function HeaderLink({ label, href }: HeaderLinkProps) {
  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <Link
      href={href}
      className="text-lg text-[#292D78] transition-colors hover:text-[#ED9F2D]"
    >
      {capitalizeFirstLetter(label)}
    </Link>
  );
}
