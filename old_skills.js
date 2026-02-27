"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const skills = [
  {
    title: "Programming",
    desc: "C, C++, Python, JavaScript, and TypeScript fundamentals for problem solving and development.",
    tools: ["C/C++", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Web Development",
    desc: "Build responsive web apps with strong component architecture and modern development workflow.",
    tools: ["React", "Next.js", "Node.js", "REST APIs"],
  },
  {
    title: "Cyber Security",
    desc: "Focus on practical security workflows including secure coding and vulnerability analysis.",
    tools: ["OWASP", "Threat Analysis", "Secure Coding", "Basic Cryptography"],
  },
  {
    title: "Tooling",
    desc: "Strong daily tooling for version control, debugging, and operating system level workflows.",
    tools: ["Git", "GitHub", "Linux", "Wireshark"],
  },
  {
    title: "Networking",
    desc: "Good grasp of network fundamentals, protocols, and practical troubleshooting techniques.",
    tools: ["TCP/IP", "DNS", "Port Analysis", "Packet Inspection"],
  },
  {
    title: "Professional Skills",
    desc: "Consistent documentation, communication, and a security-first engineering mindset.",
    tools: ["Problem Solving", "Team Collaboration", "Documentation", "Research"],
  },
];

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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSkills);
    }, 3000);
    return () => clearInterval(timer);
  }, [totalSkills]);

  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + totalSkills) % totalSkills);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % totalSkills);

  return (
    <section id="skills" className="section-card section-shell">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-4xl font-semibold text-sky-700 md:text-5xl">Skills</h2>
        <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous skills"
              className="rounded-lg border border-slate-300 bg-white p-2.5 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-500 hover:text-sky-700"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next skills"
              className="rounded-lg border border-slate-300 bg-white p-2.5 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-500 hover:text-sky-700"
            >
              <ChevronRight size={18} />
            </button>
        </div>
      </div>

      <div className="mt-6">
        <div key={activeIndex} className="skills-fade grid gap-6 md:grid-cols-3">
          {visibleSkills.map((skill, idx) => (
            <article
              key={`${skill.title}-${idx}`}
              className="rounded-2xl border border-slate-200/80 bg-white/95 p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-300/70 md:p-7"
            >
              <h3 className="text-2xl font-semibold text-slate-900">{skill.title}</h3>
              <p className="mt-4 text-lg leading-8 text-slate-700">{skill.desc}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {skill.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700"
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
              aria-label={`Go to skills position ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                activeIndex === index ? "bg-sky-600" : "bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
