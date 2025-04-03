import React from 'react'

const CertificateSec = () => {
  return (
    <div>
      <section id="Certificate" className="p-10 text-center scroll-mt-20">
                <h2 className="text-5xl font-bold text-blue-400">Certificates</h2>
                <div className="mt-5 justify-center w-full">
                    {[1, 2, 3].map((num) => (
                        <div key={num} className="p-6 m-2 bg-gray-700 rounded-lg shadow-2xl transform hover:scale-102 hover:bg-gray-800 transition duration-300 border border-gray-700">
                            <h3 className="text-2xl font-semibold text-white">{num}</h3>
                            <p className="text-gray-400 mt-2">Description of certificate {num}.</p>
                        </div>
                    ))}
                </div>
            </section>
    </div>
  )
}

export default CertificateSec
