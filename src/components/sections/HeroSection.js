import React from 'react'
import Image from 'next/image'
import { Code2, Github, Instagram, Linkedin } from 'lucide-react'

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

const HeroSection = () => {
    return (
        <header id="home" className="scroll-mt-24">
            <div className="section-card section-shell grid items-center gap-8 md:grid-cols-2 md:gap-10">
                <div>
                    <p className="text-base font-semibold uppercase tracking-[0.2em] text-sky-700">
                        Cyber Security Portfolio
                    </p>
                    <h1 className="mt-4 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
                        Sudhanshu Kumar
                    </h1>
                    <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700 md:text-xl">
                        Cyber Security student building secure software and modern web experiences.
                        I enjoy ethical hacking workflows, practical defensive strategies, and full
                        stack development.
                    </p>

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
                            className="rounded-lg border border-slate-300 bg-white/80 px-5 py-3 text-base font-semibold text-slate-700 transition hover:scale-[1.03] hover:border-sky-500 hover:text-sky-700"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="mt-4">
                        <p className="mb-2 text-sm font-medium text-slate-600">Professional Profiles</p>
                        <div className="flex flex-wrap items-center gap-2.5">
                            {socialLinks.map(({ href, label, Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={label}
                                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white/85 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-500 hover:text-sky-700"
                                >
                                    <Icon size={16} />
                                    <span>{label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative flex justify-center md:justify-end">
                    <div className="pointer-events-none absolute -bottom-6 -right-4 h-40 w-40 rounded-full bg-sky-300/40 blur-3xl" />
                    <div className="pointer-events-none absolute -left-4 -top-6 h-32 w-32 rounded-full bg-teal-300/40 blur-3xl" />

                    <div className="group relative rounded-[2rem] bg-gradient-to-br from-blue-500 via-sky-400 to-teal-400 p-[3px] shadow-2xl shadow-blue-300/40 transition duration-500 hover:-translate-y-1">
                        <div className="relative overflow-hidden rounded-[1.8rem] bg-white p-2">
                            <Image
                                src='/images/WhatsApp Image 2026-01-29 at 3.14.11 AM.jpeg'
                                alt="Sudhanshu Kumar portrait"
                                width={380}
                                height={480}
                                priority
                                className="h-[440px] w-[340px] rounded-[1.5rem] object-cover object-top transition duration-500 group-hover:scale-[1.04]"
                            />
                            <div className="pointer-events-none absolute inset-x-2 bottom-2 rounded-b-[1.4rem] bg-gradient-to-t from-slate-900/35 to-transparent p-3 text-white">
                                <p className="text-sm font-semibold tracking-wide">Cyber Security Student</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeroSection
