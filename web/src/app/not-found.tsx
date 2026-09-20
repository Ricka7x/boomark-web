import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Page not found | ${APP_NAME}`,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70dvh] max-w-lg flex-col items-center justify-center px-6 py-24 text-center">
      <Image src="/assets/logo.webp" alt="" width={80} height={80} className="rounded-2xl" />
      <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
        Boo. This page doesn&apos;t exist.
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-muted">
        Everything you save in Boomark stays put. This page didn&apos;t. Let&apos;s get you
        back to somewhere real.
      </p>
      <Link href="/" className="btn btn-primary mt-9">
        Take me home
      </Link>
    </div>
  );
}
