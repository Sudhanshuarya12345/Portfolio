import React from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

const ProjectsPage = () => {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-5 py-24 text-slate-800">
      <Link
        href="/"
        className="inline-flex items-center rounded-lg border border-slate-300 px-4 py-2 text-base font-semibold text-slate-700 transition hover:border-sky-500 hover:text-sky-700"
      >
        Back to Home
      </Link>

      <section className="pt-8">
        <h1 className="text-4xl font-semibold text-sky-700 md:text-5xl">
          All Projects
        </h1>
        <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-700">
          Projects synced from my GitHub repositories.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-3 md:auto-rows-fr">
          {projects.map((project) => (
            <article
              key={project.name}
              className="section-card min-w-0 rounded-2xl p-6 transition hover:-translate-y-1 hover:border-sky-300/70"
            >
              <h2 className="break-words text-2xl font-semibold leading-tight text-slate-900">{project.name}</h2>
              <p className="mt-3 break-words text-lg leading-8 text-slate-700">
                {project.summary}
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.14em] text-sky-700">
                {project.stack}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex rounded-md border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:border-sky-500 hover:text-sky-700"
              >
                Open Repo
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
