"use client";

import GiscusComponent from "@giscus/react";

// TODO: set these up at giscus.app once this repo exists on GitHub with
// Discussions enabled, then replace the placeholders below.
const GISCUS_REPO = "Ricka7x/boomark-web";
const GISCUS_REPO_ID = "";
const GISCUS_CATEGORY = "Announcements";
const GISCUS_CATEGORY_ID = "";

export default function Giscus() {
  if (!GISCUS_REPO_ID || !GISCUS_CATEGORY_ID) return null;

  return (
    <div className="w-full">
      <GiscusComponent
        repo={GISCUS_REPO as `${string}/${string}`}
        repoId={GISCUS_REPO_ID}
        category={GISCUS_CATEGORY}
        categoryId={GISCUS_CATEGORY_ID}
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="light"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
