"use client"
import React from 'react'
import { submitAction } from '@/action/form'
import { useRef } from 'react'

const ContactSec = () => {

    let ref = useRef()
    return (
        <div>
            <section id="contact" className="p-10 text-center bg-gray-900 rounded-lg shadow-2xl mx-5 my-10 border border-gray-700  scroll-mt-20">
                <h2 className="text-5xl font-bold text-blue-400">Contact Me</h2>
                <form ref={ref} action={(e) => { submitAction(e); ref.current.reset() }} className="mt-5 max-w-md mx-auto">
                    <input type="text" name="name" placeholder="Your Name" className="w-full p-4 mb-4 rounded bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-400 text-lg" required />
                    <input type="email" name="email" placeholder="Your Email" className="w-full p-4 mb-4 rounded bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-400 text-lg" required />
                    <textarea name="message" placeholder="Your Message" className="w-full p-4 mb-4 rounded bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-400 text-lg" required></textarea>
                    <button type="submit" className="bg-blue-600 px-6 py-3 rounded-full text-white font-semibold hover:bg-blue-700 transition duration-300 shadow-lg text-lg">Send</button>
                </form>
            </section>

        </div>
    )
}

export default ContactSec
