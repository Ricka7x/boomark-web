import Link from "next/link";

export default function Footer() {
  return (
    <footer className="divider mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} Boomark. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="/privacy/" className="hover:text-zinc-800 transition-colors">Privacy</Link>
          <Link href="/terms/" className="hover:text-zinc-800 transition-colors">Terms</Link>
          <Link href="/blog/" className="hover:text-zinc-800 transition-colors">Blog</Link>
        </div>
      </div>
    </footer>
  );
}
