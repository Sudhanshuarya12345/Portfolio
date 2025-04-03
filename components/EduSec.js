import React from 'react'

const EduSec = () => {
    return (
        <div>
            <section id="education" className="scroll-mt-20 p-10 text-center bg-gray-800 rounded-lg shadow-2xl mx-5 my-5 border border-gray-700">
                <h2 className="text-5xl font-bold text-blue-400 mb-6">Education</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* 10th Education */}
                    <div className="p-6 bg-gray-900 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 border border-gray-700 flex flex-col items-center">
                        <span className="text-5xl text-blue-400 mb-3">🏫</span>
                        <h3 className="text-2xl font-semibold text-white">Matriculation</h3>
                        <p className="text-gray-300 mt-2 text-lg">Trithankar Mahavir Vidya Mandir</p>
                        <p className="text-gray-300 mt-2 text-lg">Pawapuri, Nalanda, Bihar</p>
                        <p className="text-gray-500 text-sm">2018 - 2020</p>
                    </div>

                    {/* 12th Education */}
                    <div className="p-6 bg-gray-900 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 border border-gray-700 flex flex-col items-center">
                        <span className="text-5xl text-blue-400 mb-3">🏛️</span>
                        <h3 className="text-2xl font-semibold text-white">Intermediate</h3>
                        <p className="text-gray-300 mt-2 text-lg">Kisan College</p>
                        <p className="text-gray-300 mt-2 text-lg">Bihar Sharif, Nalanda, Bihar</p>
                        <p className="text-gray-500 text-sm">2020 - 2022</p>
                    </div>

                    {/* BE Cyber Security */}
                    <div className="p-6 bg-gray-900 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 border border-gray-700 flex flex-col items-center">
                        <span className="text-5xl text-blue-400 mb-3">🎓</span>
                        <h3 className="text-2xl font-semibold text-white">B.E. - CSE</h3>
                        <p className="text-gray-300 mt-2 text-lg">Cyber Security</p>
                        <p className="text-gray-300 mt-2 text-lg">Dayananda Sagar College of Engineering</p>
                        <p className="text-gray-300 mt-2 text-lg">Banglore</p>
                        <p className="text-gray-500 text-sm">2023 - 2027</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EduSec
