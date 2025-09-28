import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";

export const metadata = {
  title: "Blog",
  description: "Articles and notes by Leonel Felezario",
};

export default function BlogPage() {
  const posts = (portfolioData.blog?.posts || []).slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section className="container mx-auto px-4 md:px-6 py-10">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Blog</h1>
      <p className="text-gray-600 mb-10">Thoughts on engineering, software, and the craft of building.</p>

      {posts.length === 0 ? (
        <p>No posts yet. Check back soon.</p>
      ) : (
        <ul className="grid gap-6 md:gap-8">
          {posts.map((post) => (
            <li key={post.slug} className="panel p-6 hover:shadow-sm transition-shadow">
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <time className="text-sm text-gray-500" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" })}
                </time>
              </div>
              <div className="text-sm text-gray-500 mb-3">
                {post.tags?.map((t: string) => (
                  <span key={t} className="inline-block mr-2">#{t}</span>
                ))}
              </div>
              <p className="text-gray-700">{post.excerpt}</p>
              <div className="mt-4">
                <Link href={`/blog/${post.slug}`} className="btn">Read more</Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
