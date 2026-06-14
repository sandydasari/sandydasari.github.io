import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import ThemeToggle from "../../components/Theme/ThemeToggle";
import Subscribe from "../../components/Newsletter/Subscribe";
import { getAllPostsMeta, PostMeta } from "../../utils/posts";
import { profile } from "../../utils/site-data";

type Props = { posts: PostMeta[] };

function formatDate(d: string) {
  if (!d) return "";
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export default function BlogIndex({ posts }: Props) {
  return (
    <>
      <Head>
        <title>{`Writing, ${profile.name}`}</title>
        <meta name="description" content="Notes on AI engineering, agentic systems, RAG, and applied ML." />
      </Head>

      <div className="min-h-screen bg-AAprimary text-AAtext">
        {/* Header */}
        <header className="sticky top-0 z-20 bg-AAprimary/80 backdrop-blur-md border-b border-AAborder">
          <div className="max-w-3xl mx-auto px-5 py-3.5 flex items-center justify-between">
            <Link href="/" className="font-medium text-[14px] text-AAtext tracking-tight uppercase">{profile.name}</Link>
            <nav className="flex items-center gap-1">
              <Link href="/" className="text-AAmuted hover:text-AAtext text-[13px] px-2.5 py-1 rounded-lg hover:bg-AAsurface transition-colors">Home</Link>
              <ThemeToggle />
            </nav>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-5 pb-24">
          {/* Hero */}
          <section className="pt-16 sm:pt-24 pb-4">
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-AAmuted">Writing</span>
            <h1 className="font-serif text-[30px] sm:text-[42px] font-medium text-AAtext leading-[1.1] tracking-tight mt-5 max-w-xl">
              AI agents: what works and what breaks.
            </h1>
            <p className="text-AAmuted text-[15px] leading-relaxed max-w-lg mt-6">
              Notes from building AI coding agents, the failures, the tricks that stuck, and whatever's
              new in AI that's actually worth writing down.
            </p>
          </section>

          {/* Posts */}
          <section className="pt-12 sm:pt-16 mt-12 sm:mt-16 border-t border-AAborder">
            <div className="flex items-baseline justify-between mb-7">
              <h2 className="font-serif text-2xl sm:text-[28px] font-medium text-AAtext tracking-tight">All posts</h2>
              <span className="font-mono text-[11px] tracking-[0.18em] text-AAmuted">{posts.length.toString().padStart(2, "0")}</span>
            </div>

            <div className="divide-y divide-AAborder">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block py-5 first:pt-0 grid sm:grid-cols-[150px_1fr] gap-1 sm:gap-6"
                >
                  <div className="font-mono text-[11px] text-AAmuted sm:pt-0.5">{formatDate(post.date)}</div>
                  <div>
                    <h3 className="text-[14.5px] font-medium text-AAtext leading-snug group-hover:opacity-70 transition-opacity">{post.title}</h3>
                    <p className="text-AAmuted text-[13px] leading-relaxed mt-1.5">{post.description}</p>
                    <div className="mt-2.5 flex flex-wrap items-center gap-2 font-mono text-[10px] tracking-wider text-AAmuted">
                      <span>{post.readingTime}</span>
                      {post.tags.length > 0 && <span className="text-AAborder-strong">·</span>}
                      {post.tags.map((t) => (
                        <span key={t} className="border border-AAborder text-AAmuted uppercase tracking-widest px-2 py-0.5 rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
              {posts.length === 0 && (
                <p className="font-mono text-[12px] text-AAmuted py-5">No posts yet.</p>
              )}
            </div>
          </section>

          {/* Subscribe */}
          <section className="mt-14 pt-10 border-t border-AAborder">
            <Subscribe />
          </section>

          {/* Footer */}
          <footer className="flex items-center justify-between mt-14 pt-8 border-t border-AAborder">
            <p className="text-AAmuted text-[12px]">© {new Date().getFullYear()} {profile.name}</p>
            <Link href="/" className="text-AAmuted text-[12px] hover:text-AAtext transition-colors">← Home</Link>
          </footer>
        </main>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = getAllPostsMeta();
  return { props: { posts } };
};
