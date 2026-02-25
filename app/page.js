import React from "react";
import { MobileNav } from "@/components/navigation";
import {
  HeroSection,
  EducationSection,
  SkillsSection,
  ProjectsSection,
  CertificatesSection,
  ContactSection,
} from "@/components/sections";
import { homeNavItems } from "@/config/navigation";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-slate-800">
      <nav className="fixed top-0 z-50 w-full border-b border-slate-200/70 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:py-4">
          <a href="#home" className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-sky-700">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-r from-sky-500 to-teal-500" />
            Sudhanshu Kumar
          </a>

          <MobileNav items={homeNavItems} />

          <ul className="hidden items-center gap-2 rounded-xl border border-slate-200/80 bg-white/80 p-1 text-sm font-semibold text-slate-700 shadow-sm md:flex">
            {homeNavItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block rounded-lg px-3.5 py-2 transition hover:bg-sky-50 hover:text-sky-700"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="mx-auto w-full max-w-6xl flex-1 space-y-12 px-5 pb-1 pt-28 md:pt-32 md:pb-3">
        <HeroSection />

        <section id="about" className="section-card section-shell">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-start">
            <div>
              <p className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">
                Profile Summary
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-sky-700 md:text-5xl">About Me</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">
                I am a <strong className="font-semibold text-slate-900">Computer Science undergraduate</strong> specializing in{" "}
                <strong className="font-semibold text-sky-700">Cyber Security</strong>, with a strong
                focus on <strong className="font-semibold text-slate-900">secure software engineering</strong> and{" "}
                <strong className="font-semibold text-teal-700">practical problem solving</strong>. I approach
                challenges with <strong className="font-semibold text-slate-900">discipline</strong>,{" "}
                <strong className="font-semibold text-slate-900">consistency</strong>, and a{" "}
                <strong className="font-semibold text-sky-700">hard-working mindset</strong>, and I enjoy
                breaking down complex issues into clear, reliable solutions.
              </p>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">
                My work combines <strong className="font-semibold text-slate-900">secure coding</strong>,{" "}
                <strong className="font-semibold text-teal-700">vulnerability assessment</strong>, and{" "}
                <strong className="font-semibold text-slate-900">modern web development</strong> to build
                applications that are <strong className="font-semibold text-sky-700">robust</strong>,{" "}
                <strong className="font-semibold text-sky-700">user-focused</strong>, and{" "}
                <strong className="font-semibold text-sky-700">scalable</strong>. I value{" "}
                <strong className="font-semibold text-slate-900">ownership</strong>,{" "}
                <strong className="font-semibold text-slate-900">continuous learning</strong>, and high engineering standards
                in every project I contribute to.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <article className="rounded-xl border border-slate-200 bg-white/85 p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-sky-700">Problem Solving</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Structured thinking with practical execution for real-world technical challenges.
                </p>
              </article>
              <article className="rounded-xl border border-slate-200 bg-white/85 p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-sky-700">Work Ethic</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Consistent, hard-working, and committed to delivering quality outcomes.
                </p>
              </article>
              <article className="rounded-xl border border-slate-200 bg-white/85 p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-sky-700">Security Mindset</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Security-first approach across design, development, and testing decisions.
                </p>
              </article>
              <article className="rounded-xl border border-slate-200 bg-white/85 p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-sky-700">Continuous Growth</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Focused on learning fast, adapting quickly, and improving with every project.
                </p>
              </article>
            </div>
          </div>
        </section>

        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </main>

      <footer className="mt-0 border-t border-slate-200/80 bg-white/60 px-5 py-6 backdrop-blur">
        <div className="mx-auto flex justify-center text-center">
          <p className="text-sm font-medium text-slate-600 md:text-base">
            &copy; 2026 Sudhanshu Kumar . Built with Next.js
          </p>
        </div>
      </footer>
    </div>
  );
}
