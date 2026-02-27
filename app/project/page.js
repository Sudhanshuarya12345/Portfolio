"use client";

import Link from "next/link";
import { ArrowUpRight, FolderGit2, House, Layers3 } from "lucide-react";
import { projects } from "@/data/projects";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

const ProjectsPage = () => {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-5 py-24 text-slate-800 dark:bg-slate-950 dark:text-slate-400">
      <ScrollAnimation>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-4 py-2 text-base font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-500 hover:text-sky-700 dark:border-emerald-500/20 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
        >
          <House size={16} />
          Back to Home
        </Link>
      </ScrollAnimation>

      <section className="pt-8">
        <ScrollAnimation delay={0.1}>
          <div className="section-card overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-r from-white/95 via-sky-50/70 to-teal-50/60 p-6 md:p-8 dark:border-emerald-500/20 dark:from-slate-900 dark:via-slate-900 dark:to-emerald-950/20">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700 dark:border-emerald-500/30 dark:bg-emerald-400/10 dark:text-emerald-400">
                  <Layers3 size={14} />
                  Portfolio Work
                </p>
                <h1 className="mt-4 text-4xl font-semibold tracking-tight text-sky-700 md:text-5xl dark:text-slate-50">
                  All Projects
                </h1>
                <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-400">
                  A curated list of GitHub projects across cybersecurity, web apps, and programming practice.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm dark:border-emerald-500/20 dark:bg-slate-900 dark:text-emerald-400">
                <FolderGit2 size={16} />
                {projects.length} Repositories
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <div className="mt-7 grid items-stretch gap-5 md:auto-rows-fr md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollAnimation key={project.name} delay={0.2 + 0.06 * index} className="h-full">
              <article
                className="section-card group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 p-6 transition hover:-translate-y-1 hover:border-sky-300/70 dark:border-emerald-500/20 dark:bg-slate-900 dark:hover:border-emerald-500/50"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 to-teal-500 opacity-70 dark:from-emerald-400 dark:to-teal-400" />
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-sky-700 dark:border-emerald-500/30 dark:bg-emerald-400/10 dark:text-emerald-400">
                    {project.stack}
                  </span>
                  <span className="text-xs font-semibold tracking-[0.12em] text-slate-500 dark:text-slate-400">
                    #{String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="mt-4 break-words text-2xl font-semibold leading-tight text-slate-900 dark:text-slate-50">{project.name}</h2>
                <p className="mt-3 flex-1 break-words text-lg leading-8 text-slate-700 dark:text-slate-400">
                  {project.summary}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg border border-slate-300 bg-white/85 px-3.5 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-sky-500 hover:text-sky-700 dark:border-emerald-500/20 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
                >
                  Open Repo
                  <ArrowUpRight size={15} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </article>
            </ScrollAnimation>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
