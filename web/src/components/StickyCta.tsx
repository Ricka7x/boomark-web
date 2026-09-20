"use client";

import { useEffect, useState } from "react";
import { DOWNLOAD_URL } from "@/lib/constants";

export default function StickyCta() {
  const [pastWalkthrough, setPastWalkthrough] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const walkthrough = document.getElementById("walkthrough");
    const footer = document.getElementById("site-footer");
    if (!walkthrough || !footer) return;

    const walkObserver = new IntersectionObserver(
      ([entry]) => setPastWalkthrough(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      { rootMargin: "-10% 0px 0px 0px" },
    );
    const footerObserver = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting));

    walkObserver.observe(walkthrough);
    footerObserver.observe(footer);
    return () => {
      walkObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);

  const visible = pastWalkthrough && !footerVisible;

  return (
    <aside
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-200 flex items-center justify-between gap-4 border-t border-night-border bg-night/95 px-6 py-3.5 backdrop-blur-md transition-transform duration-(--dur-long) ease-(--ease-out) ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <span className="hidden text-sm text-night-foreground/60 sm:block">
        $7, once &middot; no subscription.
      </span>
      <a
        href={DOWNLOAD_URL}
        className="btn ml-auto bg-accent-fill text-sm text-accent-fill-foreground hover:opacity-85 sm:ml-0"
      >
        Download for Mac
      </a>
    </aside>
  );
}
