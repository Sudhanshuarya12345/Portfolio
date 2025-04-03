import React from 'react'
import Link from 'next/link'

const ProjectSec = () => {
    return (
        <div>
            <section id="projects" className="p-10 text-center scroll-mt-20">
                <h2 className="text-5xl font-bold text-blue-400">Projects</h2>
                <div className="mt-5 justify-center">
                    {/* {[1, 2, 3].map((num) => (
                        <div key={num} className="p-6 bg-gray-800 rounded-lg shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-700">
                            <h3 className="text-2xl font-semibold text-white">Project {num}</h3>
                            <p className="text-gray-400 mt-2">Description of project {num}.</p>
                        </div>
                    ))} */}
                    <div className='p-6 bg-gray-800 rounded-lg shadow-2xl transform transition duration-300 border border-gray-700 text-white text-center'>
                        <p className='mb-4 text-lg font-semibold'>View my Project on a Dedicated Page</p>
                        <Link href="/project"  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition duration-300">
                            My Project &#8594;
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProjectSec
