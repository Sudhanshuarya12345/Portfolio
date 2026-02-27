import React from 'react'

const EducationSection = () => {
    const education = [
        {
            title: "B.E. - Computer Science",
            subtitle: "Cyber Security",
            institution: "Dayananda Sagar College of Engineering",
            location: "Bengaluru, India",
            years: "2023 - 2027",
        },
        {
            title: "Intermediate",
            subtitle: "Science Stream",
            institution: "Kisan College",
            location: "Bihar Sharif, Nalanda, Bihar",
            years: "2020 - 2022",
        },
        {
            title: "Matriculation",
            subtitle: "Secondary Education",
            institution: "Trithankar Mahavir Vidya Mandir",
            location: "Pawapuri, Nalanda, Bihar",
            years: "2018 - 2020",
        },
    ];

    return (
        <section id="education" className="section-card section-shell">
            <div className="flex flex-wrap items-end justify-between gap-4">
                <h2 className="text-4xl font-semibold text-sky-700 md:text-5xl">Education</h2>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3 md:gap-6">
                {education.map((item) => (
                    <article
                        key={item.title}
                        className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:border-sky-300/70 sm:p-6"
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">
                            {item.years}
                        </p>
                        <h3 className="mt-3 text-xl font-semibold text-slate-900 sm:text-2xl">{item.title}</h3>
                        <p className="mt-2 text-base text-slate-700 sm:text-lg">{item.subtitle}</p>
                        <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-5">{item.institution}</p>
                        <p className="text-base leading-7 text-slate-600">{item.location}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default EducationSection
