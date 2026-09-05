import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getReadingTime } from "@/lib/posts";
import { SITE_URL, APP_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Blog | ${APP_NAME}`,
  description: "Placeholder blog index description.",
  alternates: {
    canonical: '/blog/',
    types: {
      "application/rss+xml": `${SITE_URL}/feed.xml`,
    },
  },
};

export default function BlogIndex() {
  const posts = getAllPosts().filter((p) => p.published);

  return (
    <div className="min-h-screen pt-16 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="prose prose-lg max-w-none">
          <h1>Blog</h1>
          <p className="text-zinc-500">Placeholder blog index description.</p>

          {posts.length === 0 ? (
            <p className="text-zinc-400">No posts yet. Check back soon.</p>
          ) : (
            <div className="space-y-12 mt-12">
              {posts.map((post) => {
                const readingTime = getReadingTime(post.slug);
                return (
                  <article key={post.slug} className="group">
                    <Link href={`/blog/${post.slug}/`} className="block no-underline">
                      <div className="flex items-center gap-3 mb-3">
                        <time className="text-zinc-400 text-sm font-mono">
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                        <span className="text-zinc-300 text-xs">·</span>
                        <span className="text-zinc-500 text-xs font-mono bg-black/5 border border-black/10 rounded-full px-2.5 py-0.5">
                          {readingTime} min read
                        </span>
                      </div>
                      <h2 className="text-3xl tracking-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-zinc-500 text-lg mt-2">{post.description}</p>
                    </Link>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
