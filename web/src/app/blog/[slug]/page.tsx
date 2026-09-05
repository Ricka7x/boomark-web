import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPosts, getMDXBySlug, getReadingTime } from "@/lib/posts";
import { SITE_URL, APP_NAME } from "@/lib/constants";
import Giscus from "@/components/Giscus";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import BlogVideo from "@/components/BlogVideo";
import ScrollProgress from "@/components/ScrollProgress";
import ImagePlaceholder from "@/components/BlogImagePlaceholder";

const mdxComponents = {
  Video: BlogVideo,
  ImagePlaceholder,
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts()
    .filter((p) => p.published)
    .map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  const url = `${SITE_URL}/blog/${slug}/`;

  return {
    title: `${post.title} | ${APP_NAME}`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      authors: post.author ? [post.author] : [],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const source = getMDXBySlug(slug);
  const readingTime = getReadingTime(slug);
  const url = `${SITE_URL}/blog/${slug}/`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: `${post.date}T00:00:00Z`,
    dateModified: `${post.date}T00:00:00Z`,
    author: {
      "@type": "Organization",
      name: post.author || `${APP_NAME} Team`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  const publishedPosts = getAllPosts().filter((p) => p.published);
  const currentIndex = publishedPosts.findIndex((p) => p.slug === slug);
  const otherPosts = publishedPosts.filter((p) => p.slug !== slug);
  const relatedPosts = otherPosts.length <= 3
    ? otherPosts
    : Array.from({ length: 3 }, (_, i) => otherPosts[(currentIndex + i) % otherPosts.length]);

  return (
    <>
      <ScrollProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="min-h-screen pt-16 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-zinc-400 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog/" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-zinc-600 truncate">{post.title}</span>
          </nav>

          <div className="prose prose-lg max-w-none">
            <div className="flex items-center gap-3 mb-8 not-prose">
              <time className="text-zinc-400 text-xs font-mono">
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

            <h1>{post.title}</h1>

            <p className="text-zinc-500">{post.description}</p>

            <MDXRemote source={source} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
          </div>

          {relatedPosts.length > 0 && (
            <div className="divider mt-16 pt-12">
              <h2 className="text-xl tracking-tight mb-6">More posts</h2>
              <div className="space-y-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}/`}
                    className="block group"
                  >
                    <h3 className="text-lg tracking-tight group-hover:text-primary transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-zinc-500 text-sm mt-1">{related.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="divider mt-16 pt-12">
            <h2 className="text-xl tracking-tight mb-6">Comments</h2>
            <Giscus />
          </div>
        </div>
      </article>
    </>
  );
}
