"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, FolderGit2 } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

const projects = [
  {
    title: "Secure-Wipe",
    desc: "Secure deletion focused project to improve safe file and data cleanup workflows.",
    tags: "Python",
    url: "https://github.com/Sudhanshuarya12345/Secure-Wipe",
  },
  {
    title: "Book.It-Experiences",
    desc: "TypeScript assignment project around booking and experience management interfaces.",
    tags: "TypeScript",
    url: "https://github.com/Sudhanshuarya12345/Book.It-Experiences",
  },
  {
    title: "AI-Chat-Collaborator-N-CodeEditor",
    desc: "JavaScript project combining chat collaboration with a code editor experience.",
    tags: "JavaScript",
    url: "https://github.com/Sudhanshuarya12345/AI-Chat-Collaborator-N-CodeEditor",
  },
  {
    title: "Vulnerability_Scanner",
    desc: "Security scanning project that explores vulnerability checks and reporting flow.",
    tags: "Python",
    url: "https://github.com/Sudhanshuarya12345/Vulnerability_Scanner",
  },
  {
    title: "My-Awesome-Cart",
    desc: "E-commerce style front-end practice project with shopping cart interactions.",
    tags: "HTML",
    url: "https://github.com/Sudhanshuarya12345/My-Awesome-Cart",
  },
];

const ProjectsSection = () => {
  const totalProjects = projects.length;
  const visibleCount = 3;
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleProjects = useMemo(
    () =>
      Array.from({ length: visibleCount }, (_, offset) => {
        const index = (activeIndex + offset) % totalProjects;
        return projects[index];
      }),
    [activeIndex, totalProjects]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalProjects);
    }, 3000);
    return () => clearInterval(timer);
  }, [totalProjects]);

  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % totalProjects);

  return (
    <section id="projects" className="section-card section-shell scroll-mt-24">
      <ScrollAnimation>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-4xl font-semibold text-sky-700 md:text-5xl dark:text-slate-50">Projects</h2>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous projects"
            className="rounded-lg border border-slate-300 bg-white p-2.5 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-500 hover:text-sky-700"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next projects"
            className="rounded-lg border border-slate-300 bg-white p-2.5 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-500 hover:text-sky-700"
          >
            <ChevronRight size={18} />
          </button>
          <Link
            href="/project"
            className="ml-1 inline-flex items-center rounded-lg border border-sky-300/80 bg-gradient-to-r from-sky-50 to-teal-50 px-4 py-2 text-base font-semibold text-sky-700 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-500 hover:from-sky-100 hover:to-teal-100 hover:shadow-md dark:border-emerald-500/30 dark:from-emerald-400/10 dark:to-teal-400/10 dark:text-emerald-400 dark:hover:border-emerald-400 dark:hover:from-emerald-400/20 dark:hover:to-teal-400/20"
          >
            View All Projects
          </Link>
        </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation delay={0.2} yOffset={40} className="mt-6">
        <div key={activeIndex} className="skills-fade grid gap-6 md:grid-cols-3 md:auto-rows-fr">
          {visibleProjects.map((project, idx) => (
            <article
              key={`${project.title}-${idx}`}
              className="min-w-0 rounded-2xl border border-slate-200/80 bg-white/95 p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-300/70 md:p-7 dark:border-emerald-500/20 dark:bg-slate-900 dark:hover:border-emerald-500/50"
            >
              <h3 className="break-words text-xl font-semibold leading-tight text-slate-900 sm:text-2xl dark:text-slate-50">
                {project.title}
              </h3>
              <p className="mt-3 break-words text-base leading-7 text-slate-700 sm:mt-4 sm:text-lg sm:leading-8 dark:text-slate-400">
                {project.desc}
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.14em] text-sky-700 sm:mt-5 dark:text-emerald-400">
                {project.tags}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex rounded-md border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:border-sky-500 hover:text-sky-700 sm:mt-5 dark:border-emerald-500/20 dark:text-slate-400 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
              >
                GitHub Repo
              </a>
            </article>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to project position ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                activeIndex === index ? "bg-sky-600 dark:bg-emerald-400" : "bg-slate-300 dark:bg-slate-400/30"
              }`}
            />
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default ProjectsSection;
