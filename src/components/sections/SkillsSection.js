"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Code2 } from "lucide-react";
import { skills } from "@/data/skills";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

const SkillsSection = () => {
  const totalSkills = skills.length;
  const visibleCount = 3;
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleSkills = useMemo(
    () =>
      Array.from({ length: visibleCount }, (_, offset) => {
        const index = (activeIndex + offset) % totalSkills;
        return skills[index];
      }),
    [activeIndex, totalSkills]
  );

  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + totalSkills) % totalSkills);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % totalSkills);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="skills" className="section-card section-shell scroll-mt-24">
      <ScrollAnimation>
        <div className="mb-10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 dark:bg-emerald-400/10 dark:text-emerald-400">
              <Code2 className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl dark:text-slate-50">Skills</h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous skills"
              className="rounded-lg border border-slate-300 bg-white p-2.5 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-500 hover:text-sky-700 dark:border-emerald-500/20 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next skills"
              className="rounded-lg border border-slate-300 bg-white p-2.5 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-500 hover:text-sky-700 dark:border-emerald-500/20 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation delay={0.2} yOffset={40}>
        <div className="relative overflow-hidden rounded-3xl bg-slate-50 p-4 sm:p-8 dark:bg-slate-900/30">
          <div key={activeIndex} className="skills-fade grid gap-6 md:grid-cols-3">
            {visibleSkills.map((skill, idx) => (
              <article
                key={`${skill.title}-${idx}`}
                className="rounded-2xl border border-slate-200/80 bg-white/95 p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-300/70 md:p-7 dark:border-emerald-500/20 dark:bg-slate-900 dark:hover:border-emerald-500/50"
              >
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">{skill.title}</h3>
                <p className="mt-4 text-lg leading-8 text-slate-700 dark:text-slate-400">{skill.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {skill.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700 dark:border-emerald-500/30 dark:bg-emerald-400/10 dark:text-emerald-400"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {skills.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleDotClick(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-sky-600 dark:bg-emerald-400"
                    : "w-2.5 bg-sky-200 hover:bg-sky-300 dark:bg-slate-400/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default SkillsSection;
