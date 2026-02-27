import { GraduationCap, Calendar, MapPin, Building2 } from "lucide-react";
import { education } from "@/data/education";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

export function EducationSection() {
    return (
        <section id="education" className="section-card section-shell scroll-mt-24">
      <ScrollAnimation>
        <div className="mb-10 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 dark:bg-emerald-400/10 dark:text-emerald-400">
            <GraduationCap className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl dark:text-slate-50">Education</h2>
        </div>
      </ScrollAnimation>

      <div className="relative grid items-stretch gap-5 md:grid-cols-3 md:gap-6">
                {education.map((item, index) => (
                      <ScrollAnimation key={index} delay={0.1 * (index + 1)} className="h-full">
              <article className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg hover:shadow-slate-200/60 dark:border-emerald-500/20 dark:bg-slate-900 dark:hover:border-emerald-500/50 dark:hover:shadow-lg dark:hover:shadow-black/35">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold leading-tight text-slate-900 md:text-2xl dark:text-slate-50">{item.title}</h3>
                    <p className="mt-2 text-lg font-medium text-sky-700 dark:text-slate-400">{item.subtitle}</p>
                  </div>
                  <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 dark:border-emerald-500/30 dark:bg-emerald-400/10 dark:text-emerald-400">
                    <Calendar className="h-4 w-4 text-sky-600 dark:text-emerald-400" />
                    <span className="text-sm font-semibold text-sky-700 dark:text-emerald-400">{item.years}</span>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                    <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-600 dark:text-emerald-400" />
                    <span className="text-sm font-medium">{item.institution}</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-600 dark:text-emerald-400" />
                    <span className="text-sm font-medium">{item.location}</span>
                  </div>
                </div>
              </article>
            </ScrollAnimation>
          ))}
        </div>
        </section>
    )
}

export default EducationSection
