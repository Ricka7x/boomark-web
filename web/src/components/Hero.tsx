"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { DOWNLOAD_URL } from "@/lib/constants";
import VideoPlaceholder from "./VideoPlaceholder";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="mx-auto max-w-5xl px-6 pt-32 pb-20 text-center lg:pt-40 lg:pb-28">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src="/assets/logo.webp"
          alt=""
          width={96}
          height={96}
          priority
          className="mx-auto rounded-2xl"
        />

        <h1 className="mx-auto mt-8 max-w-3xl text-5xl leading-[1.03] font-extrabold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          Your{" "}
          <span className="relative inline-block">
            boo
            <svg
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute -bottom-2 left-0 h-3 w-full text-accent sm:-bottom-3 sm:h-4"
            >
              <path
                d="M2 11 C 16 1, 26 1, 34 10 S 54 19, 64 9 C 70 3, 76 3, 82 8 C 88 13, 92 6, 96 4"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          kmarks, never ghosted again.
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted">
          Open the palette, type a few letters, land on the one you meant. Nothing gets
          lost in the tabs.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <a href={DOWNLOAD_URL} className="btn btn-primary">
            Download for Mac
          </a>
          <a
            href="#walkthrough"
            className="text-sm font-medium text-foreground underline decoration-border decoration-1 underline-offset-4 transition-colors duration-(--dur-short) ease-(--ease-out) hover:decoration-foreground"
          >
            See the walkthrough &rarr;
          </a>
        </div>
        <p className="mt-5 text-sm text-muted">$7,00 USD once &middot; no subscription &middot; macOS 13 and later</p>
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16"
      >
        <VideoPlaceholder label="30-second product demo: opening the palette, searching, pinning a bookmark" />
      </motion.div>
    </section>
  );
}
