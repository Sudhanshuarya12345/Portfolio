import React from "react";
import Sidebar from "@/components/Sidebar";
import HeroSec from "@/components/HeroSec";
import EduSec from "@/components/EduSec";
import SkillSec from "@/components/SkillSec";
import ProjectSec from "@/components/ProjectSec";
import CertificateSec from "@/components/CertificateSec";
import ContactSec from "@/components/ContactSec";

export default function Home() {
    return (
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white min-h-screen flex flex-col">
                {/* Navbar */}
                <nav className="p-5 bg-black bg-opacity-70 backdrop-blur-lg flex justify-between items-center shadow-lg fixed w-full top-0 z-50 border-b border-gray-700">
                    <h1 className="text-3xl font-extrabold text-blue-400">
                        <a href="#Home" className="hover:text-blue-400 transition duration-300">Portfolio</a>
                    </h1>
                    <Sidebar/>
                    <ul className="hidden md:flex space-x-8 text-lg">
                        <li><a href="#about" className="hover:text-blue-400 transition duration-300">About</a></li>
                        <li><a href="#education" className="hover:text-blue-400 transition duration-300">Education</a></li>
                        <li><a href="#skills" className="hover:text-blue-400 transition duration-300">Skills</a></li>
                        <li><a href="#projects" className="hover:text-blue-400 transition duration-300">Projects</a></li>
                        <li><a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a></li>
                    </ul>
                </nav>

                {/* Main Content */}
                <main className="flex-grow">

                    {/* Hero Section */}
                    <HeroSec />

                    {/* About Section */}
                    <section id="about" className="p-10 text-center bg-gray-900 rounded-lg shadow-2xl mx-5 my-5 border border-gray-700 scroll-mt-20">
                        <h2 className="text-5xl font-bold text-blue-400 mb-3">About Me</h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">I am a BE Cyber Security student with a strong foundation in C, C++, Python, Java, and web development. I love exploring security vulnerabilities and ethical hacking methodologies.</p>
                    </section>

                    {/* Education Section */}
                    <EduSec />

                    {/* Skills Section */}
                    <SkillSec />

                    {/* Projects Section */}
                    <ProjectSec />

                    {/* Projects Section */}
                    <CertificateSec />

                    {/* Contact me section */}
                    <ContactSec />

                </main>

                {/* Footer (Fixing White Space Issue) */}
                <footer className="bg-gray-900 text-center p-5 mt-5 border-t border-gray-700">
                    <p className="text-gray-400">&copy; 2025 Sudhanshu Kumar. All rights reserved.</p>
                </footer>
            </div>
    );
}