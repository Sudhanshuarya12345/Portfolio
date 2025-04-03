import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <Link href="/" className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition duration-300">
        &#8592; HOME
      </Link>
      This is project dedicated page
    </div>
  )
}

export default page
