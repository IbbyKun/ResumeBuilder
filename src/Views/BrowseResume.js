import React from 'react';

export default function BrowseResume() {
  return (
    <div 
      className="mainbackground"
      style={{
        background: 'linear-gradient(180deg, #3E1F47, #144552)',
        minHeight: '100vh', 
        overflowX: 'hidden', 
      }}
    >
      {/* Navbar of this Page */}
      <nav className="text-white p-4" style={{ backgroundColor: '#3E1F47' }}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-3xl font-serif" style={{ fontFamily: 'Dancing Script' }}>ResumeParser</div>
          <div className="hidden md:flex space-x-8 text-lg">
            <a href="/" className="hover:text-zinc-300">Home</a>
            <a href="/" className="hover:text-zinc-300">Upload</a>
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
      <div className="md:hidden text-white p-4" id="mobile-menu" style={{ backgroundColor: '#3E1F47' }}>
        <a href="/" className="block py-2 hover:text-zinc-300">Home</a>
        <a href="/" className="block py-2 hover:text-zinc-300">Upload</a>
      </div>
      {/* Navbar Ends Here */}

      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl font-bold mb-8" style={{ marginTop: '100px', fontFamily: 'Judson', fontSize: '3rem' }}>Resume Example</h1>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16 lg:space-x-32" style={{ marginTop: '30px' }}>
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Judson', fontSize: '2rem' }}>Picture</h2>
            <img src="https://placehold.co/300x400" alt="Resume Picture" className="shadow-lg rounded-lg" />
          </div>
          <div className="flex flex-col items-center mx-4 my-auto">
            <div className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Judson', marginLeft: '200px', marginRight: '200px' }}>OR</div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Judson', fontSize: '2rem', marginTop: '-200px' }}>File or PDF</h2>
            <div className="flex items-center justify-center border border-zinc-300 bg-white text-black rounded-lg p-4 shadow-lg" style={{ marginTop: '50px' }}>
              <span className="mr-4">CV.pdf - 61.5 KB</span>
              <button className="text-zinc-500 hover:text-zinc-700">&times;</button>
            </div>
          </div>
        </div>
      </div>

      {/* Browse File Section */}
      <div className="flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="text-2xl md:text-3xl font-semibold mb-8" style={{ fontFamily: 'Judson', fontSize: '3rem' }}>Do You Want to Parse your Resumes?</h1>
        <div className="bg-white text-center p-12 rounded-lg shadow-xl border-4 border-purple-300">
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-purple-700 mb-6">
            Upload Your Files Here
          </p>
          <button
            className="bg-white text-black border-2 border-black px-6 py-3 rounded-lg shadow-lg hover:bg-zinc-100 text-lg md:text-xl"
          >
            Browse Files
          </button>
        </div>
      </div>

      {/* End of Browse File Section */}
    </div>
  );
}