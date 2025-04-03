// import React from 'react'
  
// const SkillSec = () => {
//   return (
//     <div>
//         <section id="skills" className="scroll-mt-20 p-10 text-center bg-gray-900 rounded-lg shadow-2xl mx-5 my-5 border border-gray-700">
//                     <h2 className="text-5xl font-bold text-blue-400 mb-6">Skills</h2>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {/* Programming Skills */}
//                         <div className="p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 border border-gray-700 flex flex-col items-center">
//                             <span className="text-5xl text-blue-400 mb-3">💻</span>
//                             <h3 className="text-2xl font-semibold text-white">Programming</h3>
//                             <p className="text-gray-300 mt-2 text-lg">C, C++, Python, Java, JavaScript, Node.js, React.js, Next.js</p>
//                         </div>

//                         {/* Web Development */}
//                         <div className="p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 border border-gray-700 flex flex-col items-center">
//                             <span className="text-5xl text-blue-400 mb-3">🌐</span>
//                             <h3 className="text-2xl font-semibold text-white">Web Development</h3>
//                             <p className="text-gray-300 mt-2 text-lg">HTML, CSS, JavaScript, React.js, Next.js, Node.js</p>
//                         </div>

//                         {/* Cyber Security */}
//                         <div className="p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 border border-gray-700 flex flex-col items-center">
//                             <span className="text-5xl text-blue-400 mb-3">🔐</span>
//                             <h3 className="text-2xl font-semibold text-white">Cyber Security</h3>
//                             <p className="text-gray-300 mt-2 text-lg">Cybersecurity tools, Networking, OS, Cryptography</p>
//                         </div>

//                         {/* Tools & Technologies */}
//                         <div className="p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 border border-gray-700 flex flex-col items-center">
//                             <span className="text-5xl text-blue-400 mb-3">🛠️</span>
//                             <h3 className="text-2xl font-semibold text-white">Tools & Tech</h3>
//                             <p className="text-gray-300 mt-2 text-lg">Git, GitHub, Linux, Kali Linux, Burp Suite, Wireshark</p>
//                         </div>

//                         {/* Networking */}
//                         <div className="p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 border border-gray-700 flex flex-col items-center">
//                             <span className="text-5xl text-blue-400 mb-3">🌍</span>
//                             <h3 className="text-2xl font-semibold text-white">Networking</h3>
//                             <p className="text-gray-300 mt-2 text-lg">TCP/IP, Firewalls, Penetration Testing</p>
//                         </div>

//                         {/* Ethical Hacking */}
//                         {/* <div className="p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 border border-gray-700 flex flex-col items-center">
//                             <span className="text-5xl text-blue-400 mb-3">👨‍💻</span>
//                             <h3 className="text-2xl font-semibold text-white">Ethical Hacking</h3>
//                             <p className="text-gray-300 mt-2 text-lg">Penetration Testing, Exploit Development, OSINT</p>
//                         </div> */}
//                     </div>
//                 </section>


//     </div>
//   )
// }

// export default SkillSec


import React from 'react';

const SkillSec = () => {
    const skills = [
        { icon: "💻", title: "Programming", desc: "C, C++, Python, Java, JavaScript, Node.js, React.js, Next.js" },
        { icon: "🌐", title: "Web Development", desc: "HTML, CSS, JavaScript, React.js, Next.js, Node.js" },
        { icon: "🔐", title: "Cyber Security", desc: "Cybersecurity tools, Networking, OS, Cryptography" },
        { icon: "🛠️", title: "Tools & Tech", desc: "Git, GitHub, Linux, Kali Linux, Wireshark" },
        { icon: "🌍", title: "Networking", desc: "TCP/IP, Firewalls" }
    ];

    return (
        <div className="flex justify-center">
            <section id="skills" className="scroll-mt-20 p-10 text-center bg-gray-900 rounded-lg shadow-2xl mx-5 my-5 border border-gray-700">
                <h2 className="text-5xl font-bold text-blue-400 mb-6">Skills</h2>

                {/* Centered Grid System */}
                <div className="flex flex-wrap justify-center gap-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="border-gray-700 w-full sm:w-96 p-6 bg-gray-800 bg-opacity-80 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 border flex flex-col items-center text-center">
                            <span className="text-6xl mb-3">{skill.icon}</span>
                            <h3 className="text-2xl font-semibold text-white">{skill.title}</h3>
                            <p className="text-gray-300 mt-2 text-lg">{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default SkillSec;
