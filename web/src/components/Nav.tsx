import Image from "next/image";
import Link from "next/link";
import { DOWNLOAD_URL } from "@/lib/constants";

export default function Nav() {
  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 top-4 z-200 mx-auto flex w-fit items-center gap-5 rounded-full border border-border bg-background/80 py-2 pr-2 pl-3.5 shadow-[0_8px_24px_-12px_oklch(0%_0_0/0.22)] backdrop-blur-md backdrop-saturate-150"
    >
      <Link href="/" className="flex items-center gap-2">
        <Image src="/assets/logo.webp" alt="" width={20} height={20} priority className="rounded-md" />
        <span className="font-mono text-sm font-medium tracking-tight">boomark</span>
      </Link>

      <div className="hidden items-center gap-4 text-sm text-muted sm:flex">
        <Link href="/#walkthrough" className="whitespace-nowrap transition-colors duration-(--dur-short) ease-(--ease-out) hover:text-foreground">
          Walkthrough
        </Link>
        <Link href="/blog/" className="whitespace-nowrap transition-colors duration-(--dur-short) ease-(--ease-out) hover:text-foreground">
          Blog
        </Link>
      </div>

      <a href={DOWNLOAD_URL} className="btn btn-primary px-4 py-2 text-sm">
        Download
      </a>
    </nav>
  );
}
