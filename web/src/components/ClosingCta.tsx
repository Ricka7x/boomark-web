import { DOWNLOAD_URL } from "@/lib/constants";
import GhostMark from "./GhostMark";

export default function ClosingCta() {
  return (
    <section className="bg-night py-(--space-2xl) sm:py-(--space-3xl)">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-accent-fill px-8 pt-16 pb-56 text-accent-fill-foreground sm:px-16 sm:pt-20 sm:pb-20">
          <div className="relative z-10 max-w-md">
            <p className="text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl">
              Your bookmarks were never the problem. Finding them again was.
            </p>
            <div className="mt-10">
              <a
                href={DOWNLOAD_URL}
                className="btn bg-accent-fill-foreground px-8 py-4 text-base font-semibold text-white hover:opacity-85"
              >
                Download for Mac
              </a>
            </div>
          </div>

          {/* Mobile: centered, cropped to only the top half (dome + eyes), sitting at the card edge */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 overflow-hidden sm:hidden">
            <GhostMark className="absolute top-0 left-1/2 h-80 w-auto -translate-x-1/2 text-accent-fill-foreground" />
          </div>

          {/* Desktop: large, bleeding off the right/bottom edge of the card */}
          <GhostMark className="pointer-events-none absolute -right-10 -bottom-32 hidden h-136 w-auto text-accent-fill-foreground sm:block" />
        </div>
      </div>
    </section>
  );
}
