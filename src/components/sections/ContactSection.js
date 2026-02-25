"use client"
import { useActionState, useEffect, useRef, useState } from 'react'
import { useFormStatus } from 'react-dom'
import { submitAction } from '@/actions/contact/submitContactAction'
import { Mail, ShieldCheck, Send } from 'lucide-react'

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
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-teal-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-200 transition hover:from-blue-500 hover:to-teal-400 disabled:cursor-not-allowed disabled:opacity-60"
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
        <section id="contact" className="section-card section-shell">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
                <div className="rounded-2xl border border-sky-200/70 bg-gradient-to-br from-sky-50 to-teal-50 p-6">
                    <h2 className="text-4xl font-semibold text-sky-700 md:text-5xl">Contact</h2>
                    <p className="mt-4 text-lg leading-8 text-slate-700">
                        If you have internship opportunities, collaboration ideas, or project
                        feedback, send your message here.
                    </p>

                    <div className="mt-7 space-y-4">
                        <div className="flex items-center gap-3 rounded-xl border border-white/80 bg-white/70 px-4 py-3">
                            <Mail size={18} className="text-sky-700" />
                            <p className="text-base font-medium text-slate-700">Available for collaboration</p>
                        </div>
                        <div className="flex items-center gap-3 rounded-xl border border-white/80 bg-white/70 px-4 py-3">
                            <ShieldCheck size={18} className="text-teal-600" />
                            <p className="text-base font-medium text-slate-700">Security-first development approach</p>
                        </div>
                    </div>
                </div>

                <form ref={formRef} action={formAction} className="rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm">
                    <div className="space-y-5">
                        <div>
                            <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-slate-700">Name</label>
                            <input
                                id="contact-name"
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-800 outline-none transition focus:border-sky-500"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                maxLength={100}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
                            <input
                                id="contact-email"
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-800 outline-none transition focus:border-sky-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                maxLength={254}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-slate-700">Message</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                placeholder="Your Message"
                                rows={5}
                                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-800 outline-none transition focus:border-sky-500"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                maxLength={2000}
                                required
                            />
                            <p className={`mt-2 text-sm ${hasMinMessageLength ? "text-emerald-700" : "text-slate-500"}`}>
                                Message should be more than 10 characters.
                            </p>
                        </div>

                        <div className="pt-1">
                            <SubmitButton canSubmit={canSubmit} />
                        </div>
                    </div>
                </form>
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
