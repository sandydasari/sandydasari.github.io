import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import { useState, useRef } from "react";
import ThemeToggle from "../components/Theme/ThemeToggle";
import ProjectCover from "../components/Projects/ProjectCover";
import Subscribe from "../components/Newsletter/Subscribe";

const AskAI = dynamic(() => import("../components/Chat/AskAI"), { ssr: false });
import { getAllPostsMeta, PostMeta } from "../utils/posts";
import { experience, projects, achievements, publications, profile } from "../utils/site-data";

type Props = { posts: PostMeta[] };

function formatDate(d: string) {
  if (!d) return "";
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

const featuredProjects = projects.filter((p) => p.featured);
const otherProjects = projects.filter((p) => !p.featured);

function Card({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`border border-AAborder rounded-2xl bg-AAsurface/40 ${className}`}>{children}</div>;
}

/** Section wrapper - hairline divider + heading + index. */
function Section({
  title,
  no,
  id,
  children,
}: {
  title: string;
  no: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="pt-12 sm:pt-16 mt-12 sm:mt-16 border-t border-AAborder">
      <div className="flex items-baseline justify-between mb-7">
        <h2 className="font-serif text-2xl sm:text-[28px] font-medium text-AAtext tracking-tight">{title}</h2>
        <span className="font-mono text-[11px] tracking-[0.18em] text-AAmuted">{no}</span>
      </div>
      {children}
    </section>
  );
}

/** Awards - one at a time, navigate with arrows or swipe. */
function AwardsCarousel() {
  const [index, setIndex] = useState(0);
  const total = achievements.length;
  const a = achievements[index];
  const startX = useRef<number | null>(null);

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  const onTouchStart = (e: React.TouchEvent) => { startX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (dx > 45) prev();
    else if (dx < -45) next();
    startX.current = null;
  };

  return (
    <div>
      <div
        key={a.title}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className="grid sm:grid-cols-[200px_1fr] gap-5 sm:gap-7 items-start animate-[fadeIn_.25s_ease-out]"
      >
        <div className="rounded-lg overflow-hidden aspect-[4/3] bg-AAsurface">
          <img src={a.image} alt={a.title} className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-[10px] tracking-wider uppercase text-AAtext border border-AAborder rounded-full px-2 py-0.5">{a.label}</span>
            <span className="font-mono text-[10px] text-AAmuted">{a.year}</span>
          </div>
          <h4 className="text-[15px] font-medium text-AAtext leading-snug mb-2">{a.title}</h4>
          <p className="text-AAmuted text-[13px] leading-relaxed">{a.context}</p>
        </div>
      </div>

      {total > 1 && (
        <div className="flex items-center justify-between mt-6">
          <div className="flex gap-1.5">
            {achievements.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to ${i + 1}`}
                className={`h-1 rounded-full transition-all ${i === index ? "bg-AAtext w-6" : "bg-AAborder w-2 hover:bg-AAmuted"}`}
              />
            ))}
          </div>
          <div className="flex gap-1.5">
            <button onClick={prev} aria-label="Previous" className="w-8 h-8 rounded-lg border border-AAborder text-AAmuted hover:text-AAtext hover:border-AAborder-strong flex items-center justify-center transition-colors">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button onClick={next} aria-label="Next" className="w-8 h-8 rounded-lg border border-AAborder text-AAmuted hover:text-AAtext hover:border-AAborder-strong flex items-center justify-center transition-colors">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Home({ posts }: Props) {
  const latestPost = posts[0] ?? null;

  return (
    <>
      <Head>
        <title>{`${profile.name}, ${profile.role}`}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={profile.bio} />
        <meta property="og:title" content={`${profile.name}, ${profile.role}`} />
        <meta property="og:description" content={profile.bio} />
        <meta property="og:url" content="https://sandydasari.com" />
        <link rel="canonical" href="https://sandydasari.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/titofCercle.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-AAprimary text-AAtext">
        {/* Header */}
        <header className="sticky top-0 z-20 bg-AAprimary/80 backdrop-blur-md border-b border-AAborder">
          <div className="max-w-3xl mx-auto px-5 py-3.5 flex items-center justify-between">
            <span className="font-medium text-[14px] text-AAtext tracking-tight uppercase">{profile.name}</span>
            <nav className="flex items-center gap-0.5">
              <a href="#writing" className="hidden sm:inline-block text-AAmuted hover:text-AAtext text-[13px] px-2 py-1 rounded-lg hover:bg-AAsurface transition-colors">Writing</a>
              <a href="#achievements" className="hidden md:inline-block text-AAmuted hover:text-AAtext text-[13px] px-2 py-1 rounded-lg hover:bg-AAsurface transition-colors">Achievements</a>
              <a href="#work" className="hidden sm:inline-block text-AAmuted hover:text-AAtext text-[13px] px-2 py-1 rounded-lg hover:bg-AAsurface transition-colors">Work</a>
              <a href="#experience" className="hidden md:inline-block text-AAmuted hover:text-AAtext text-[13px] px-2 py-1 rounded-lg hover:bg-AAsurface transition-colors">Experience</a>
              <a href="#research" className="hidden sm:inline-block text-AAmuted hover:text-AAtext text-[13px] px-2 py-1 rounded-lg hover:bg-AAsurface transition-colors">Research</a>
              <a href="#contact" className="hidden sm:inline-block text-AAmuted hover:text-AAtext text-[13px] px-2 py-1 rounded-lg hover:bg-AAsurface transition-colors">Contact</a>
              <ThemeToggle />
            </nav>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-5 pb-24">
          {/* ===== Hero ===== */}
          <section className="pt-16 sm:pt-24 pb-2">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
              <img
                src="/sandy.jpg"
                alt={profile.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border border-AAborder shrink-0"
              />
              <div>
                <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-AAmuted">
                  AI Research Engineer · Leoforce
                </span>
                <p className="text-AAmuted text-[16px] sm:text-[17px] leading-relaxed max-w-lg mt-3">
                  I'm an AI Research Engineer at <span className="text-AAtext font-medium">Leoforce</span>, building
                  {" "}<span className="text-AAtext font-medium">multi-agent systems</span>, the orchestration
                  patterns, tool use, and routing that make agents actually work together. I stay close to what's new
                  in agents and write about what holds up. Before that, two years building RAG systems for
                  {" "}<span className="text-AAtext font-medium">60k documents</span> at
                  {" "}<span className="text-AAtext font-medium">ANZ</span>, and a patented DL model in the construction
                  domain at <span className="text-AAtext font-medium">IIT Bombay</span>.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 text-[13px]">
              <a href={`mailto:${profile.email}`} className="text-AAtext font-medium hover:opacity-70 transition-opacity">Get in touch →</a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="text-AAmuted hover:text-AAtext transition-colors">GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-AAmuted hover:text-AAtext transition-colors">LinkedIn</a>
              <a href={profile.resume} target="_blank" rel="noreferrer" className="text-AAmuted hover:text-AAtext transition-colors">Résumé</a>
            </div>
          </section>

          {/* ===== Writing ===== */}
          <Section title="Writing" no="01" id="writing">
            <p className="text-AAtext text-[15px] leading-relaxed max-w-lg mb-7">
              I write about AI agents, what works and what breaks. Failures, tricks, and whatever's new
              that's actually worth knowing.
            </p>
            {latestPost ? (
              <Link href={`/blog/${latestPost.slug}`} className="group block">
                <div className="font-mono text-[10px] tracking-wider text-AAmuted mb-2">
                  {formatDate(latestPost.date)} · {latestPost.readingTime}
                </div>
                <h4 className="text-[16px] font-medium text-AAtext leading-snug group-hover:opacity-70 transition-opacity">{latestPost.title}</h4>
                <p className="text-AAmuted text-[13px] leading-relaxed mt-2 max-w-lg">{latestPost.description}</p>
                <span className="inline-flex items-center gap-1.5 text-AAtext text-[13px] font-medium mt-4">Read all writing →</span>
              </Link>
            ) : (
              <Link href="/blog" className="group block text-AAmuted text-[13px] hover:text-AAtext transition-colors">
                Essays on AI engineering, agentic systems, and RAG. Read all writing →
              </Link>
            )}
          </Section>

          {/* ===== Achievements (carousel, one at a time) ===== */}
          <Section title="Achievements" no="02" id="achievements">
            <AwardsCarousel />
          </Section>

          {/* ===== Selected work (bento) ===== */}
          <Section title="Selected Work" no="03" id="work">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {featuredProjects.map((project) => (
                <Card key={project.title} className="p-4 flex flex-col group">
                  <div className="rounded-xl overflow-hidden mb-4">
                    <ProjectCover title={project.title} image={project.images?.[0]} />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[10px] tracking-wider uppercase text-AAmuted">{project.category}</span>
                    <span className="font-mono text-[10px] text-AAmuted">· {project.year}</span>
                  </div>
                  <h3 className="text-[15px] font-medium text-AAtext mb-2">{project.title}</h3>
                  <p className="text-AAmuted text-[13px] leading-relaxed flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[11px] bg-AAprimary text-AAmuted rounded-md border border-AAborder">{t}</span>
                    ))}
                  </div>
                  {(project.github || project.link) && (
                    <div className="flex gap-4 mt-3 pt-3 border-t border-AAborder text-[12px]">
                      {project.github && project.github !== "#" && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="text-AAmuted hover:text-AAtext transition-colors">Code</a>
                      )}
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noreferrer" className="text-AAtext font-medium hover:opacity-70 transition-opacity">Live ↗</a>
                      )}
                    </div>
                  )}
                </Card>
              ))}
            </div>

            {otherProjects.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
                {otherProjects.map((p) => (
                  <Card key={p.title} className="p-4 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] tracking-wider uppercase text-AAmuted">{p.category}</span>
                      {p.github && p.github !== "#" && (
                        <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-AAmuted hover:text-AAtext transition-colors">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57v-2c-3.34.72-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.08-.74.09-.72.09-.72 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.1-.77.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.3.46-2.38 1.23-3.22-.12-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.81 5.62-5.49 5.92.42.36.81 1.1.81 2.22v3.29c0 .31.21.69.84.57A12 12 0 0 0 12 .3" /></svg>
                        </a>
                      )}
                    </div>
                    <h4 className="text-[14px] font-medium text-AAtext mb-1.5">{p.title}</h4>
                    <p className="text-AAmuted text-[12px] leading-relaxed flex-1">{p.description}</p>
                    <div className="mt-3 font-mono text-[10px] tracking-wider text-AAmuted">{p.tech.slice(0, 3).join(" · ")}</div>
                  </Card>
                ))}
              </div>
            )}
          </Section>

          {/* ===== Experience ===== */}
          <Section title="Experience" no="04" id="experience">
            <div className="divide-y divide-AAborder">
              {experience.map((job) => (
                <div key={job.role + job.company} className="py-5 first:pt-0 grid sm:grid-cols-[150px_1fr] gap-1 sm:gap-6">
                  <div className="font-mono text-[11px] text-AAmuted sm:pt-0.5">{job.date}</div>
                  <div>
                    <h4 className="text-[14.5px] font-medium text-AAtext">{job.role}</h4>
                    {job.link ? (
                      <a href={job.link} target="_blank" rel="noreferrer" className="text-AAmuted text-[13px] hover:text-AAtext transition-colors">{job.company}</a>
                    ) : (
                      <span className="text-AAmuted text-[13px]">{job.company}</span>
                    )}
                    <p className="text-AAmuted text-[13px] leading-relaxed mt-1.5">{job.bullets[0]}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* ===== Research ===== */}
          <Section title="Research" no="05" id="research">
            <div className="divide-y divide-AAborder">
              {publications.map((paper) => (
                <a key={paper.doi} href={paper.url} target="_blank" rel="noreferrer" className="group block py-5 first:pt-0 grid sm:grid-cols-[150px_1fr] gap-1 sm:gap-6">
                  <div className="font-mono text-[11px] text-AAmuted sm:pt-0.5">{paper.type} · {paper.year}</div>
                  <div>
                    <h4 className="text-[14.5px] font-medium text-AAtext leading-snug group-hover:opacity-70 transition-opacity">{paper.title}</h4>
                    <p className="text-AAmuted text-[12.5px] mt-1">{paper.venue}</p>
                  </div>
                </a>
              ))}
            </div>
          </Section>

          {/* ===== Contact ===== */}
          <Section title="Contact" no="06" id="contact">
            <p className="text-[15px] text-AAtext leading-relaxed max-w-md">
              Open to senior AI engineering, research, and applied ML roles, plus consulting on RAG and multi-agent systems. My inbox is open.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 text-[13px]">
              <a href={`mailto:${profile.email}`} className="text-AAtext font-medium hover:opacity-70 transition-opacity">Say hello →</a>
              <a href={profile.resume} target="_blank" rel="noreferrer" className="text-AAmuted hover:text-AAtext transition-colors">Résumé</a>
            </div>
          </Section>

          {/* Subscribe */}
          <div className="mt-14 pt-12 border-t border-AAborder">
            <Subscribe />
          </div>

          {/* Footer */}
          <footer className="flex items-center justify-between mt-14 pt-8 border-t border-AAborder">
            <p className="text-AAmuted text-[12px]">© {new Date().getFullYear()} {profile.name}</p>
            <div className="flex gap-5 text-AAmuted text-[12px]">
              <a href={`mailto:${profile.email}`} className="hover:text-AAtext transition-colors">Email</a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-AAtext transition-colors">GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-AAtext transition-colors">LinkedIn</a>
            </div>
          </footer>
        </main>
        <AskAI />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = getAllPostsMeta();
  return { props: { posts } };
};
