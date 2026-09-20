"use client";

import { motion, useReducedMotion } from "motion/react";
import { AppleLogo, DeviceMobile, PuzzlePiece } from "@phosphor-icons/react";

export default function Surfaces() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-night pb-(--space-3xl)">
      <div className="mx-auto max-w-6xl px-6">
        <header className="pb-(--space-xl)">
          <h2 className="max-w-lg text-3xl font-semibold tracking-tight text-night-foreground sm:text-4xl">
            The same bookmarks, wherever you&apos;re working.
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-rows-2">
          <motion.article
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex min-h-120 flex-col justify-between rounded-2xl bg-accent-fill-4 p-8 text-accent-fill-foreground sm:row-span-2"
          >
            <AppleLogo size={28} weight="bold" aria-hidden="true" />
            <div className="mt-10 max-w-sm">
              <h3 className="text-xl font-semibold tracking-tight">A native Mac app</h3>
              <p className="mt-3 text-sm leading-relaxed opacity-70">
                Lives in the menu bar. Opens with a shortcut, closes when you&apos;re done,
                never asks to be the foreground window.
              </p>
            </div>
          </motion.article>

          <motion.article
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex min-h-56 items-center gap-5 rounded-2xl bg-accent-fill-2 p-7 text-accent-fill-foreground"
          >
            <PuzzlePiece size={30} weight="bold" className="shrink-0" aria-hidden="true" />
            <div>
              <h3 className="text-base font-semibold tracking-tight">Save from any browser</h3>
              <p className="mt-1 text-sm leading-relaxed opacity-70">
                The extension adds a page to Boomark without leaving the tab.
              </p>
            </div>
          </motion.article>

          <motion.article
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="flex min-h-56 flex-col items-center justify-center gap-2 rounded-2xl bg-accent-fill-3 p-7 text-center text-accent-fill-foreground"
          >
            <DeviceMobile size={26} weight="bold" aria-hidden="true" />
            <h3 className="text-base font-semibold tracking-tight">Search it on iOS</h3>
            <p className="text-sm leading-relaxed opacity-70">
              The iPhone app carries the same list, the moment you open it.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
