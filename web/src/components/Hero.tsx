import Image from "next/image";
import { DOWNLOAD_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
      <Image src="/assets/logo.webp" alt="Boomark" width={96} height={96} priority className="mx-auto mb-8" />
      <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight">
        Boomark
      </h1>
      <p className="mt-6 text-lg text-zinc-600 max-w-xl mx-auto">
        Placeholder headline and pitch. Replace this with real copy once the design and
        messaging are ready.
      </p>
      <div className="mt-10 flex items-center justify-center gap-4" id="download">
        <a
          href={DOWNLOAD_URL}
          className="rounded-full bg-primary text-white px-6 py-3 font-medium hover:bg-primary-hover transition-colors"
        >
          Download for Mac
        </a>
      </div>
    </section>
  );
}
