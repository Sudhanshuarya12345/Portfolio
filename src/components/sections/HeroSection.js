import Image from 'next/image'
import { Code2, Github, Instagram, Linkedin } from 'lucide-react'
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

const socialLinks = [
    {
        href: 'https://github.com/Sudhanshuarya12345',
        label: 'GitHub',
        Icon: Github,
    },
    {
        href: 'https://leetcode.com/u/Sz4prTysD2/',
        label: 'LeetCode',
        Icon: Code2,
    },
    {
        href: 'https://linkedin.com/in/sudhanshu-kumar-966262283',
        label: 'LinkedIn',
        Icon: Linkedin,
    },
    {
        href: 'https://www.instagram.com/sudhanshu_ku3ar/',
        label: 'Instagram',
        Icon: Instagram,
    },
]

export default function HeroSection() {
    return (
        <header id="home" className="scroll-mt-24">
            <div className="section-card section-shell grid gap-12 lg:grid-cols-[1.25fr_0.85fr] lg:items-center">
                <div>
                    <ScrollAnimation>
                        <p className="text-base font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-emerald-400">
                            Cyber Security Portfolio
                        </p>
                        <h1 className="mt-4 text-5xl font-bold leading-tight text-slate-900 md:text-6xl dark:text-slate-50">
                            Sudhanshu Kumar
                        </h1>
                    </ScrollAnimation>

                    <ScrollAnimation delay={0.1}>
                        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700 md:text-xl dark:text-slate-400">
                            Cyber Security student building secure software and modern web experiences.
                            I enjoy ethical hacking workflows, practical defensive strategies, and full
                            stack development.
                        </p>
                    </ScrollAnimation>

                    <ScrollAnimation delay={0.2}>
                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <a
                                href="/Resume 29 Apr 2025.pdf"
                                download="Sudhanshu-Kumar-CV.pdf"
                                className="rounded-lg bg-gradient-to-r from-blue-600 to-teal-500 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-blue-200 transition hover:scale-[1.03] hover:from-blue-500 hover:to-teal-400"
                            >
                                Download CV
                            </a>
                            <a
                                href="#contact"
                                className="rounded-lg border border-slate-300 bg-white/80 px-5 py-3 text-base font-semibold text-slate-700 transition hover:scale-[1.03] hover:border-sky-500 hover:text-sky-700 dark:border-emerald-500/20 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
                            >
                                Contact Me
                            </a>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation delay={0.3}>
                        <div className="mt-4">
                            <p className="mb-2 text-sm font-medium text-slate-600 dark:text-slate-400">Professional Profiles</p>
                            <div className="flex flex-wrap items-center gap-2.5">
                                {socialLinks.map(({ href, label, Icon }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={label}
                                        className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white/85 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-500 hover:text-sky-700 dark:border-emerald-500/20 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
                                    >
                                        <Icon size={16} />
                                        <span>{label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>

                <ScrollAnimation delay={0.4} className="relative mx-auto mt-8 w-full max-w-[27rem] lg:mx-0 lg:mt-0">
                    <div className="absolute -inset-2 z-0 rounded-3xl bg-gradient-to-tr from-sky-300/40 to-transparent opacity-60 blur-xl dark:from-emerald-400/30 dark:to-transparent"></div>

                    <div className="group relative rounded-[1.6rem] border border-slate-200/80 bg-white/95 p-2 shadow-xl shadow-slate-200/50 transition duration-300 hover:-translate-y-0.5 dark:border-emerald-500/25 dark:bg-slate-900 dark:shadow-black/30">
                        <div className="relative overflow-hidden rounded-[1.35rem] bg-white dark:bg-slate-900">
                            <Image
                                src='/images/WhatsApp Image 2026-01-29 at 3.14.11 AM.jpeg'
                                alt="Sudhanshu Kumar portrait"
                                width={760}
                                height={980}
                                priority
                                className="aspect-[3/4] h-auto w-full rounded-[1.35rem] object-cover object-top transition duration-300 group-hover:scale-[1.015]"
                            />
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/55 via-slate-900/20 to-transparent px-4 pb-4 pt-8 text-white">
                                <p className="text-sm font-semibold tracking-wide">Cyber Security Student</p>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </header>
    )
}
