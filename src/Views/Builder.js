import React from 'react'

export default function Builder() {
  return (
    <>
      <div
        className="mainbackground"
        style={{
          background: 'linear-gradient(180deg, #3E1F47, #144552)',
          minHeight: '100vh', // Ensure it covers the full height of the viewport
          overflowX: 'hidden', // Prevent horizontal overflow
        }}>
             {/* Navbar of this Page */}

      <nav className="text-white p-4" style={{ backgroundColor: '#3E1F47' }}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-3xl font-serif" style={{fontFamily: 'Dancing Script'}}>ResumeParser</div>
          <div className="hidden md:flex space-x-8 text-lg">
            <a href="/" className="hover:text-zinc-300">Home</a>
            <a href="/" className="hover:text-zinc-300">Log In</a>
            <a href="/" className="hover:text-zinc-300">Sign Up</a>
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
        <a href="/" className="block py-2 hover:text-zinc-300">Log In</a>
        <a href="/" className="block py-2 hover:text-zinc-300">Sign Up</a>
      </div>
      {/* Navbar Ends Here */}
        <div
          className="flex flex-col md:flex-row items-center justify-center min-h-screen  text-white p-6">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{textAlign: 'left', marginLeft: '40px', fontFamily: 'Judson'}}>Build your resumes with us professionally</h1>
            <p className="text-lg mb-6" style={{textAlign: 'left', marginLeft: '40px', fontFamily: 'Judson'}}>With this free,professional and powerful AI based resume builder  </p>
            <button
              className="bg-white text-purple-700 font-semibold py-2 px-6 rounded-full flex items-center justify-center mx-auto md:mx-0"
              style={{float: 'left', marginLeft: '40px'}}
            >
              Build Resume
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14m-7-7l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="https://placehold.co/400x300" alt="Illustration" class="w-full max-w-md" />
          </div>
        </div>

        {/* Login Or SignUp Option */}
        <div
          class="flex flex-col items-center justify-center h-screen text-white"
        >
          <h1 class="text-3xl md:text-5xl font-bold mb-8" style={{fontFamily: 'Judson'}}>Let's start our Journey!</h1><br />
          <div class="flex space-x-12 md:space-x-16 gap-8">
            <button
              class="border border-white rounded-full px-6 py-2 text-lg hover:bg-white hover:text-blue-900 transition"
            >
              Sign-up
            </button>
            <span class="text-lg">or</span>
            <button
              class="border border-white rounded-full px-6 py-2 text-lg hover:bg-white hover:text-blue-900 transition">
              Log-in
            </button>
          </div>
        </div>

        {/* End OF Login Or Sigup Option */}
      </div>
    </>
  )
}