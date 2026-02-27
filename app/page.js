import React from "react";
import { MobileNav, ThemeToggle } from "@/components/navigation";
import {
  HeroSection,
  EducationSection,
  SkillsSection,
  ProjectsSection,
  CertificatesSection,
  ContactSection,
} from "@/components/sections";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { homeNavItems } from "@/config/navigation";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-slate-800 dark:bg-slate-950 dark:text-slate-400">
      <nav className="fixed top-0 z-50 w-full border-b border-slate-200/70 bg-white/70 backdrop-blur-xl dark:border-emerald-500/20 dark:bg-slate-950/80">

        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:py-4">
          <a href="#home" className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-sky-700 dark:text-emerald-400">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-r from-sky-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400" />
            Sudhanshu Kumar
          </a>

          <div className="flex items-center gap-2 md:gap-4">
            <ul className="hidden items-center gap-2 rounded-xl border border-slate-200/80 bg-white/80 p-1 text-sm font-semibold text-slate-700 shadow-sm md:flex dark:border-emerald-500/20 dark:bg-slate-900/80 dark:text-emerald-400">
              {homeNavItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block rounded-lg px-3.5 py-2 transition hover:bg-sky-50 hover:text-sky-700 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
            <MobileNav items={homeNavItems} />
          </div>
        </div>
      </nav>

      <main className="mx-auto w-full max-w-6xl flex-1 space-y-12 px-5 pb-1 pt-28 md:pt-32 md:pb-3">
        <HeroSection />

        <section id="about" className="section-card section-shell">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-start">
            <div>
              <ScrollAnimation>
                <p className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700 dark:border-emerald-500/30 dark:bg-emerald-400/10 dark:text-emerald-400">
                  Profile Summary
                </p>
                <h2 className="mt-4 text-4xl font-semibold text-sky-700 md:text-5xl dark:text-slate-50">About Me</h2>
              </ScrollAnimation>
              
              <ScrollAnimation delay={0.1}>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700 md:text-xl dark:text-slate-400">
                  I am a <strong className="font-semibold text-slate-900 dark:text-slate-200">Computer Science undergraduate</strong> specializing in{" "}
                  <strong className="font-semibold text-sky-700 dark:text-emerald-400">Cyber Security</strong>, with a strong
                  focus on <strong className="font-semibold text-slate-900 dark:text-slate-200">secure software engineering</strong> and{" "}
                  <strong className="font-semibold text-teal-700 dark:text-emerald-500">practical problem solving</strong>. I approach
                  challenges with <strong className="font-semibold text-slate-900 dark:text-slate-200">discipline</strong>,{" "}
                  <strong className="font-semibold text-slate-900 dark:text-slate-200">consistency</strong>, and a{" "}
                  <strong className="font-semibold text-sky-700 dark:text-emerald-400">hard-working mindset</strong>, and I enjoy
                  breaking down complex issues into clear, reliable solutions.
                </p>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700 md:text-xl dark:text-slate-400">
                  My work combines <strong className="font-semibold text-slate-900 dark:text-slate-200">secure coding</strong>,{" "}
                  <strong className="font-semibold text-teal-700 dark:text-emerald-500">vulnerability assessment</strong>, and{" "}
                  <strong className="font-semibold text-slate-900 dark:text-slate-200">modern web development</strong> to build
                  applications that are <strong className="font-semibold text-sky-700 dark:text-emerald-400">robust</strong>,{" "}
                  <strong className="font-semibold text-sky-700 dark:text-emerald-400">user-focused</strong>, and{" "}
                  <strong className="font-semibold text-sky-700 dark:text-emerald-400">scalable</strong>. I value{" "}
                  <strong className="font-semibold text-slate-900 dark:text-slate-200">ownership</strong>,{" "}
                  <strong className="font-semibold text-slate-900 dark:text-slate-200">continuous learning</strong>, and high engineering standards
                  in every project I contribute to.
                </p>
              </ScrollAnimation>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <ScrollAnimation delay={0.2} yOffset={20}>
                <article className="rounded-xl border border-slate-200 bg-white/85 p-4 dark:border-emerald-500/20 dark:bg-slate-900">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-sky-700 dark:text-emerald-400">Problem Solving</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-400">
                    Structured thinking with practical execution for real-world technical challenges.
                  </p>
                </article>
              </ScrollAnimation>
              <ScrollAnimation delay={0.3} yOffset={20}>
                <article className="rounded-xl border border-slate-200 bg-white/85 p-4 dark:border-emerald-500/20 dark:bg-slate-900">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-sky-700 dark:text-emerald-400">Work Ethic</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-400">
                    Consistent, hard-working, and committed to delivering quality outcomes.
                  </p>
                </article>
              </ScrollAnimation>
              <ScrollAnimation delay={0.4} yOffset={20}>
                <article className="rounded-xl border border-slate-200 bg-white/85 p-4 dark:border-emerald-500/20 dark:bg-slate-900">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-sky-700 dark:text-emerald-400">Security Mindset</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-400">
                    Security-first approach across design, development, and testing decisions.
                  </p>
                </article>
              </ScrollAnimation>
              <ScrollAnimation delay={0.5} yOffset={20}>
                <article className="rounded-xl border border-slate-200 bg-white/85 p-4 dark:border-emerald-500/20 dark:bg-slate-900">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-sky-700 dark:text-emerald-400">Continuous Growth</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-400">
                    Focused on learning fast, adapting quickly, and improving with every project.
                  </p>
                </article>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </main>

      <footer className="mt-0 border-t border-slate-200/80 bg-white/60 px-5 py-6 backdrop-blur dark:border-emerald-500/20 dark:bg-slate-950/60">
        <div className="mx-auto flex justify-center text-center">
          <p className="text-sm font-medium text-slate-600 md:text-base dark:text-slate-400">
            &copy; 2026 Sudhanshu Kumar . Built with Next.js
          </p>
        </div>
      </footer>
    </div>
  );
}
