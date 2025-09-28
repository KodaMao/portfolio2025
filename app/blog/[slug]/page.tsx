import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioData } from "@/data/portfolioData";

interface Params { slug: string }

export async function generateStaticParams() {
  const posts = portfolioData.blog?.posts || [];
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const post = portfolioData.blog?.posts.find((p) => p.slug === params.slug);
  return {
    title: post ? `${post.title} • Blog` : "Blog Post",
    description: post?.excerpt ?? "Blog post",
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = portfolioData.blog?.posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <article className="container mx-auto px-4 md:px-6 py-10 prose prose-neutral max-w-3xl">
      <Link href="/blog" className="text-sm text-gray-600 hover:underline">← Back to Blog</Link>
      <h1 className="!mb-2">{post.title}</h1>
      <div className="text-sm text-gray-500 mb-6">
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
        </time>
        {post.tags?.length ? (
          <span> • {post.tags.join(" • ")}</span>
        ) : null}
      </div>

      {post.content?.map((para: string, idx: number) => (
        <p key={idx}>{para}</p>
      ))}
    </article>
  );
}
