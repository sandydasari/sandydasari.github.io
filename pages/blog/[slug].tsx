import Head from "next/head";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import ThemeToggle from "../../components/Theme/ThemeToggle";
import Comments from "../../components/Comments/Comments";
import Subscribe from "../../components/Newsletter/Subscribe";
import { getAllSlugs, getPost, PostMeta } from "../../utils/posts";
import { profile } from "../../utils/site-data";

type Props = {
  meta: PostMeta;
  source: MDXRemoteSerializeResult;
};

function formatDate(d: string) {
  if (!d) return "";
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

const mdxComponents = {
  h1: (p: any) => <h1 className="font-serif text-2xl sm:text-3xl font-medium text-AAtext tracking-tight mt-12 mb-4" {...p} />,
  h2: (p: any) => <h2 className="font-serif text-xl sm:text-2xl font-medium text-AAtext tracking-tight mt-12 mb-4" {...p} />,
  h3: (p: any) => <h3 className="font-serif text-lg sm:text-xl font-medium text-AAtext tracking-tight mt-10 mb-3" {...p} />,
  p: (p: any) => <p className="text-AAtext/90 leading-[1.8] my-4 text-[17px]" {...p} />,
  a: (p: any) => <a className="text-AAtext underline underline-offset-4 decoration-AAborder-strong hover:decoration-AAtext transition-colors" {...p} />,
  ul: (p: any) => <ul className="list-disc list-outside pl-6 my-4 space-y-2 text-AAtext/90 leading-[1.8]" {...p} />,
  ol: (p: any) => <ol className="list-decimal list-outside pl-6 my-4 space-y-2 text-AAtext/90 leading-[1.8]" {...p} />,
  li: (p: any) => <li className="text-[17px]" {...p} />,
  strong: (p: any) => <strong className="text-AAtext font-semibold" {...p} />,
  em: (p: any) => <em className="text-AAtext italic" {...p} />,
  blockquote: (p: any) => (
    <blockquote className="border-l-2 border-AAborder-strong pl-5 my-6 italic text-AAmuted" {...p} />
  ),
  code: (p: any) => (
    <code className="font-mono text-[13px] bg-AAsurface text-AAtext px-1.5 py-0.5 rounded border border-AAborder" {...p} />
  ),
  pre: (p: any) => (
    <pre className="font-mono text-[13px] bg-AAsurface text-AAtext p-5 rounded border border-AAborder my-6 overflow-x-auto leading-relaxed" {...p} />
  ),
  hr: () => <hr className="border-AAborder my-12" />,
  img: (p: any) => (
    <img className="w-full rounded-lg border border-AAborder my-8" loading="lazy" {...p} />
  ),
};

export default function BlogPost({ meta, source }: Props) {
  return (
    <>
      <Head>
        <title>{`${meta.title} · ${profile.name}`}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="article" />
      </Head>

      <div className="min-h-screen bg-AAprimary text-AAtext">
        <header className="sticky top-0 z-20 bg-AAprimary/80 backdrop-blur-md border-b border-AAborder">
          <div className="max-w-3xl mx-auto px-5 py-3.5 flex items-center justify-between">
            <Link href="/" className="font-medium text-[14px] text-AAtext tracking-tight uppercase">{profile.name}</Link>
            <nav className="flex items-center gap-1">
              <Link href="/blog" className="text-AAmuted hover:text-AAtext text-[13px] px-2.5 py-1 rounded-lg hover:bg-AAsurface transition-colors">← All posts</Link>
              <ThemeToggle />
            </nav>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-5 pt-14 sm:pt-20 pb-24">
          <div className="mb-10">
            <div className="font-mono text-[11px] tracking-wider text-AAmuted mb-5">
              {formatDate(meta.date)} · {meta.readingTime}
            </div>
            <h1 className="font-serif text-[30px] sm:text-[42px] font-medium tracking-tight text-AAtext leading-[1.1] mb-5">
              {meta.title}
            </h1>
            <p className="text-AAmuted text-[15px] leading-relaxed max-w-xl mb-5">
              {meta.description}
            </p>
            {meta.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {meta.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] tracking-widest uppercase text-AAmuted border border-AAborder px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          <hr className="border-AAborder mb-2" />

          <article>
            <MDXRemote {...source} components={mdxComponents} />
          </article>

          <div className="mt-16 pt-10 border-t border-AAborder">
            <Subscribe />
          </div>

          <Comments mapping="pathname" />

          <div className="mt-16 pt-8 border-t border-AAborder font-mono text-[11px] tracking-wider text-AAmuted flex items-center justify-between">
            <span>- {meta.author}</span>
            <Link href="/blog" className="hover:text-AAtext transition-colors">← all posts</Link>
          </div>
        </main>

        <footer className="max-w-3xl mx-auto px-5 py-6 flex items-center justify-between text-AAmuted text-[12px] border-t border-AAborder">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <Link href="/" className="hover:text-AAtext transition-colors">← Home</Link>
        </footer>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getAllSlugs().map((slug) => ({ params: { slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params!.slug as string;
  const post = getPost(slug);
  const source = await serialize(post.content);
  const { content, ...meta } = post;
  return { props: { meta, source } };
};
