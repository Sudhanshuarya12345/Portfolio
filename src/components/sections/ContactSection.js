"use client"
import { useActionState, useEffect, useRef, useState } from 'react'
import { useFormStatus } from 'react-dom'
import { submitAction } from '@/actions/contact/submitContactAction'
import { AtSign, BriefcaseBusiness, Clock3, Linkedin, Mail, MessageSquare, Phone, ShieldCheck, Send, User } from 'lucide-react'
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

const initialState = {
    ok: false,
    message: "",
}

const SubmitButton = ({ canSubmit }) => {
    const { pending } = useFormStatus()

    return (
        <button
            type="submit"
            disabled={pending || !canSubmit}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-teal-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-200 transition hover:from-blue-500 hover:to-teal-400 disabled:cursor-not-allowed disabled:opacity-60 dark:from-emerald-600 dark:to-teal-600 dark:shadow-teal-900/50 dark:hover:from-emerald-500 dark:hover:to-teal-500"
        >
            <Send size={16} />
            {pending ? "Sending..." : "Send Message"}
        </button>
    )
}

const ContactSection = () => {
    const [state, formAction] = useActionState(submitAction, initialState)
    const formRef = useRef(null)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    const hasMinMessageLength = message.trim().length > 10
    const canSubmit = name.trim().length > 0 && isValidEmail && hasMinMessageLength

    useEffect(() => {
        if (state.ok) {
            formRef.current?.reset()
            setName("")
            setEmail("")
            setMessage("")
        }
    }, [state.ok])

    return (
        <section id="contact" className="section-card section-shell scroll-mt-24">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
                <ScrollAnimation>
                    <div className="rounded-2xl border border-sky-200/70 bg-gradient-to-br from-sky-50 to-teal-50 p-6 dark:border-emerald-500/20 dark:from-emerald-950/40 dark:to-teal-950/40">
                        <h2 className="text-4xl font-semibold text-sky-700 md:text-5xl dark:text-slate-50">Contact</h2>
                        <p className="mt-4 max-w-full text-base leading-relaxed text-slate-700 sm:text-lg lg:max-w-[60ch] dark:text-slate-400">
                            If you have internship opportunities, collaboration ideas, or project
                            feedback, I would love to hear from you.
                        </p>
                        <p className="mt-3 max-w-full text-base leading-relaxed text-slate-700 sm:text-lg lg:max-w-[60ch] dark:text-slate-400">
                            Drop a quick message using the form, or reach out directly through any
                            contact option below. I usually respond quickly.
                        </p>

                        <div className="mt-7 space-y-4">
                            <div className="flex items-start gap-3 rounded-xl border border-white/80 bg-white/70 px-4 py-3 dark:border-emerald-500/20 dark:bg-slate-900/50">
                                <Mail size={19} className="mt-0.5 shrink-0 text-sky-700 dark:text-emerald-400" />
                                <a
                                    href="mailto:sudhanshuarya81022@gmail.com"
                                    className="min-w-0 text-base font-medium text-slate-700 transition hover:text-sky-700 dark:text-slate-300 dark:hover:text-emerald-400"
                                >
                                    sudhanshuarya81022@gmail.com
                                </a>
                            </div>
                            <div className="flex items-start gap-3 rounded-xl border border-white/80 bg-white/70 px-4 py-3 dark:border-emerald-500/20 dark:bg-slate-900/50">
                                <Phone size={19} className="mt-0.5 shrink-0 text-teal-600 dark:text-emerald-400" />
                                <a
                                    href="tel:+919142560399"
                                    className="min-w-0 text-base font-medium text-slate-700 transition hover:text-sky-700 dark:text-slate-300 dark:hover:text-emerald-400"
                                >
                                    +91 9142560399
                                </a>
                            </div>
                            <div className="flex items-start gap-3 rounded-xl border border-white/80 bg-white/70 px-4 py-3 dark:border-emerald-500/20 dark:bg-slate-900/50">
                                <Linkedin size={18} className="mt-0.5 shrink-0 text-sky-700 dark:text-emerald-400" />
                                <a
                                    href="https://linkedin.com/in/sudhanshu-kumar-966262283"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="min-w-0 text-base font-medium text-slate-700 transition hover:text-sky-700 dark:text-slate-300 dark:hover:text-emerald-400"
                                >
                                    LinkedIn Profile
                                </a>
                            </div>
                        </div>

                        <div className="mt-6">
                            <div className="mb-3 flex items-center gap-3">
                                <span className="h-px flex-1 bg-sky-200/80 dark:bg-emerald-500/30" />
                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                                    Why Work With Me
                                </p>
                                <span className="h-px flex-1 bg-sky-200/80 dark:bg-emerald-500/30" />
                            </div>
                            <div className="grid gap-3 sm:grid-cols-2">
                                <div className="h-full rounded-xl border border-white/80 bg-white/80 p-4 dark:border-emerald-500/20 dark:bg-slate-900/60">
                                    <div className="mb-2 inline-flex rounded-lg bg-sky-100 p-2 dark:bg-emerald-900/40">
                                        <BriefcaseBusiness size={18} className="text-sky-700 dark:text-emerald-400" />
                                    </div>
                                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Collaboration Ready</p>
                                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Open to internships and project collaborations.</p>
                                </div>
                                <div className="h-full rounded-xl border border-white/80 bg-white/80 p-4 dark:border-emerald-500/20 dark:bg-slate-900/60">
                                    <div className="mb-2 inline-flex rounded-lg bg-teal-100 p-2 dark:bg-emerald-900/40">
                                        <ShieldCheck size={18} className="text-teal-600 dark:text-emerald-400" />
                                    </div>
                                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Security Focused</p>
                                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Built with secure and reliable development practices.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation delay={0.2}>
                    <form ref={formRef} action={formAction} className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-sky-50/40 p-6 shadow-sm dark:border-emerald-500/20 dark:from-slate-900 dark:to-emerald-950/20">
                        <div className="mb-5 rounded-xl border border-slate-200/80 bg-white/80 p-4 dark:border-emerald-500/20 dark:bg-slate-900/70">
                            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                                Quick Message Box
                            </p>
                            <p className="mt-2 inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                <Clock3 size={14} className="text-teal-600 dark:text-emerald-400" />
                                Usually responds within 24 hours
                            </p>
                        </div>
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">Name</label>
                                <div className="relative">
                                    <User size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
                                    <input
                                        id="contact-name"
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        className="w-full rounded-xl border border-slate-300/90 bg-white px-11 py-3 text-base text-slate-800 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:focus:border-emerald-500 dark:focus:ring-emerald-900/40"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        maxLength={100}
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">Email</label>
                                <div className="relative">
                                    <AtSign size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
                                    <input
                                        id="contact-email"
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        className="w-full rounded-xl border border-slate-300/90 bg-white px-11 py-3 text-base text-slate-800 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:focus:border-emerald-500 dark:focus:ring-emerald-900/40"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        maxLength={254}
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">Message</label>
                                <div className="relative">
                                    <MessageSquare size={16} className="pointer-events-none absolute left-4 top-4 text-slate-400 dark:text-slate-500" />
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        placeholder="Your Message"
                                        rows={5}
                                        className="w-full rounded-xl border border-slate-300/90 bg-white px-11 py-3 text-base text-slate-800 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:focus:border-emerald-500 dark:focus:ring-emerald-900/40"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        maxLength={2000}
                                        required
                                    />
                                </div>
                                <p className={`mt-2 text-sm ${hasMinMessageLength ? "text-emerald-600 dark:text-emerald-400" : "text-slate-500 dark:text-slate-400"}`}>
                                    Message should be more than 10 characters.
                                </p>
                            </div>

                            <div className="pt-1">
                                <SubmitButton canSubmit={canSubmit} />
                            </div>
                        </div>
                    </form>
                </ScrollAnimation>
            </div>

            {state.message && (
                    <p
                        aria-live="polite"
                        className={`mt-5 text-base font-medium ${state.ok ? "text-emerald-700" : "text-rose-700"}`}
                    >
                        {state.message}
                    </p>
                )}
        </section>
    )
}

export default ContactSection
