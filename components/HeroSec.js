import React from 'react'
import Image from 'next/image'

const HeroSec = () => {
    return (
        <header id="Home" className="flex flex-col justify-center items-center text-center px-5 min-h-screen pt-20">
            <div className="container w-full flex flex-col lg:flex-row items-center bg-gray-800 mx-auto p-10 rounded-lg shadow-2xl border border-gray-700">
                {/* Text Content */}
                <div className="text-center lg:text-left lg:w-1/2">
                    <h2 className="text-4xl font-bold text-gray-300 animate-fadeIn">Hello, I'm</h2>
                    <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 text-transparent bg-clip-text mt-2 animate-pulse">
                        Sudhanshu Kumar
                    </h1>

                    {/* Typing Effect for Introduction */}
                    <p className="mt-4 text-xl text-gray-300 leading-relaxed">
                        A <span className="text-blue-400 font-semibold">Cyber Security</span> student with a passion for
                        <span className="text-purple-400 font-semibold"> Ethical Hacking</span>,
                        <span className="text-pink-400 font-semibold"> Web Development</span>, and
                        <span className="text-green-400 font-semibold"> Cybersecurity Tools</span>.
                    </p>

                    {/* Call to Action Button */}
                    <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-purple-600 hover:to-blue-500 transition duration-300 shadow-lg transform hover:scale-105">
                        <a href="/CV.pdf" download="CV.pdf">
                            Download CV
                        </a> 
                    </button>
                </div>

                {/* Profile Image */}
                <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
                    <Image
                        src='/images/photo_2025-02-15_22-13-46.jpg'
                        alt="My Image"
                        width={350}
                        height={500}
                        className="rounded-2xl object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105 shadow-xl border-4 border-gray-700"
                    />
                </div>
            </div>
        </header>

    )
}

export default HeroSec
