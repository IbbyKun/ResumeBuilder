import React from 'react'

export default function ThankYou() {
  return (
    
    <div>
            {/* Navbar of this Page */}

    <nav className="text-white p-4" style={{ backgroundColor: '#3E1F47' }}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-3xl font-serif" style={{fontFamily: 'Dancing Script'}}>ResumeParser</div>
          <div className="hidden md:flex space-x-8 text-lg">
            <a href="/" className="hover:text-zinc-300">Home</a>
            <a href="/" className="hover:text-zinc-300">Thank You</a>
        
          </div>
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div className="md:hidden  text-white p-4" id="mobile-menu" style={{ backgroundColor: '#3E1F47' }}>
        <a href="/" className="block py-2 hover:text-zinc-300">Home</a>
        <a href="/" className="block py-2 hover:text-zinc-300">Thank You</a>
      </div>
      {/* Navbar Ends Here */}

      <div 
      className="mainbackground"
      style={{
        background: 'linear-gradient(180deg, #3E1F47, #144552)',
        minHeight: '100vh', // Ensure it covers the full height of the viewport
        overflowX: 'hidden', // Prevent horizontal overflow
      }}
    >
        <div class="text-white py-16 px-4 text-center" style={{marginTop: '60px'}}>
            <h1 class="text-4xl font-bold mb-4" style={{fontFamily: 'Judson', fontSize: '4rem'}}>Thank You For</h1><br />
            <h1 class="text-4xl font-bold mb-4" style={{fontFamily: 'Judson', fontSize: '4rem'  }}>Using Our Tool</h1><br />
            <div class="flex justify-center space-x-4 mb-12">
            </div>
        </div>
        </div>
    </div>
  )
}
