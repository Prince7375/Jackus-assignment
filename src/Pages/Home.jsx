import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <>
    {/* navbar */}
    
      <Navbar />

      {/* hero section of the home page */}
      <div className="w-full flex flex-col items-center text-center gap-5 p-20">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold w-4/5 lg:w-3/5 
        bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
          Welcome
        </h1>
        <h2 className="text-lg md:text-xl lg:text-2xl w-4/5 lg:w-2/5 leading-relaxed">Introducing the User Management Dashboard</h2>
        <h3 className="text-lg md:text-xl lg:text-2xl w-4/5 lg:w-2/5 leading-relaxed">I hope you will Like it</h3>
      </div>
    </>
  )
}

export default Home