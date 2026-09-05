import Image from "next/image";
import Link from "next/link";

const LINKS = [
  { href: "/blog/", label: "Blog" },
  { href: "/help/", label: "Help" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg tracking-tight">
          <Image src="/assets/logo.webp" alt="" width={28} height={28} priority />
          Boomark
        </Link>

        <div className="flex items-center gap-6 text-sm text-zinc-600">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-zinc-900 transition-colors">
              {link.label}
            </Link>
          ))}
          <Link
            href="/#download"
            className="rounded-full bg-primary text-white px-4 py-2 text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            Download
          </Link>
        </div>
      </nav>
    </header>
  );
}
