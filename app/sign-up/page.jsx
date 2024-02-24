import React from 'react'

function page() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500 flex flex-col items-center justify-center px-4 py-16">
      <h1 className="text-5xl font-bold text-white">Oops! Page Not Found</h1>
      <p className="text-2xl text-white mt-4">
        Looks like you stumbled upon a page that doesn't exist. Don't worry, we'll help you find what you're looking for.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a href="/" className="btn btn-primary">Go Home</a>
        <a href="/search" className="btn btn-outline">Search for Something Else</a>
      </div>
    </div>
  )
}

export default page;