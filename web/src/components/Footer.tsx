import Link from "next/link";

export default function Footer() {
  return (
    <footer id="site-footer" className="border-t border-night-foreground/10 bg-night">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-2 gap-y-2 px-6 py-8 text-center text-sm text-night-foreground/60 sm:justify-between sm:text-left">
        <p className="whitespace-nowrap">
          &copy; {new Date().getFullYear()} Boomark &middot; built for the keyboard
        </p>
        <div className="flex items-center gap-5">
          <Link href="/privacy/" className="whitespace-nowrap transition-colors duration-(--dur-short) ease-(--ease-out) hover:text-night-foreground">
            Privacy
          </Link>
          <Link href="/terms/" className="whitespace-nowrap transition-colors duration-(--dur-short) ease-(--ease-out) hover:text-night-foreground">
            Terms
          </Link>
          <Link href="/blog/" className="whitespace-nowrap transition-colors duration-(--dur-short) ease-(--ease-out) hover:text-night-foreground">
            Blog
          </Link>
          <Link href="/help/" className="whitespace-nowrap transition-colors duration-(--dur-short) ease-(--ease-out) hover:text-night-foreground">
            Help
          </Link>
        </div>
      </div>
    </footer>
  );
}
