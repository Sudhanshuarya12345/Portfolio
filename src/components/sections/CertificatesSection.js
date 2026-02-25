"use client"
import React, { useState } from 'react'
import { Award, CalendarDays } from 'lucide-react'

const certificates = [
  {
    name: "Computer Network",
    provider: "NPTEL",
    time: "2025",
  },
  {
    name: "Cyber Security and privacy",
    provider: "NPTEL",
    time: "2025",
  },
  {
    name: "Cryptography and Network Security",
    provider: "NPTEL",
    time: "2024-25",
  },
  {
    name: "Ethical Hacking",
    provider: "NPTEL",
    time: "2025",
  },
  {
    name: "Java Programming",
    provider: "Infosys Springboard",
    time: "2024",
  },
  {
    name: "Python Programming",
    provider: "Infosys Springboard",
    time: "2024",
  },
  {
    name: "C++ Programming",
    provider: "Infosys Springboard",
    time: "2024",
  },
  {
    name: "C Programming",
    provider: "Infosys Springboard",
    time: "2023",
  },
];

const CertificatesSection = () => {
  const [showAll, setShowAll] = useState(false)
  const visibleCertificates = showAll ? certificates : certificates.slice(0, 3)
  const hasMore = certificates.length > 3;

  return (
    <section id="certificates" className="section-card section-shell">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-4xl font-semibold text-sky-700 md:text-5xl">Certificates</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-700 md:text-lg">
            Selected certifications in cybersecurity, networking, and core programming skills.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700">
          <Award size={15} className="text-sky-700" />
          <span>{certificates.length} Certificates</span>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3 md:gap-6">
        {visibleCertificates.map((item) => (
          <article
            key={item.name}
            className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:border-sky-300/70 sm:p-6"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-sky-700">
                {item.provider}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600">
                <CalendarDays size={14} />
                {item.time}
              </span>
            </div>
            <h3 className="mt-4 text-xl font-semibold leading-8 text-slate-900 sm:text-2xl">
              {item.name}
            </h3>
          </article>
        ))}
      </div>

      {hasMore && (
        <div className="mt-7 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-sky-500 hover:text-sky-700"
          >
            {showAll ? "Show Less" : `Show More (${certificates.length - 3} more)`}
          </button>
        </div>
      )}
    </section>
  )
}

export default CertificatesSection
