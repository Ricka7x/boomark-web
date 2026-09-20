"use client";

import { motion, useReducedMotion } from "motion/react";
import ImagePlaceholder from "./ImagePlaceholder";

function Step({
  index,
  title,
  body,
  imageLabel,
  reverse = false,
}: {
  index: number;
  title: string;
  body: string;
  imageLabel: string;
  reverse?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
      className={`grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-[1fr_1.3fr] lg:gap-16 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>
        <span className="text-xs font-semibold tracking-widest text-night-foreground/50">
          0{index}
        </span>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-night-foreground sm:text-3xl">
          {title}
        </h3>
        <p className="mt-4 max-w-sm text-base leading-relaxed text-night-foreground/60">{body}</p>
      </div>
      <div className="min-w-0">
        <ImagePlaceholder
          label={imageLabel}
          tone="night"
          className="mx-auto max-w-md sm:mr-[6vw]"
        />
      </div>
    </motion.article>
  );
}

export default function Walkthrough() {
  return (
    <section id="walkthrough" className="bg-night">
      <div className="mx-auto max-w-6xl px-6">
        <header className="pt-(--space-3xl) pb-(--space-xl)">
          <h2 className="max-w-lg text-3xl font-semibold tracking-tight text-night-foreground sm:text-4xl">
            How a Mac bookmark manager should work.
          </h2>
        </header>

        <div className="divide-y divide-night-border">
          <Step
            index={1}
            title="Search matches more than the title"
            body="Type a few letters and Boomark checks the title, the domain, and any note you left on the bookmark. The list narrows before you finish the word."
            imageLabel="Screenshot: the palette open, mid-search"
          />

          <Step
            index={2}
            title="The first five get a shortcut, automatically"
            body="No binding screen, no drag-and-drop. Save a bookmark into one of your first five slots and Boomark wires ⌘1 through ⌘5 to it on its own."
            imageLabel="Screenshot: the first five bookmarks with their shortcuts"
            reverse
          />

          <Step
            index={3}
            title="Pinning keeps a bookmark put"
            body="Pin one and it moves to the top of every search, permanently &mdash; even after you save something new into its old shortcut slot."
            imageLabel="Screenshot: a pinned bookmark at the top of the list"
          />
        </div>
      </div>
    </section>
  );
}
