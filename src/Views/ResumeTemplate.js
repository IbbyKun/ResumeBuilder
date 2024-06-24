import React from 'react'
import '../Styles/template.css'

export default function ResumeTemplate() {
  return (
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
            <a href="/" className="hover:text-zinc-300">Templates</a>
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
        <a href="/" className="block py-2 hover:text-zinc-300">Templates</a>
      </div>
      {/* Navbar Ends Here */}
      <div class=" text-white py-10">
  <h1 class="text-center text-3xl font-bold mb-8" style={{fontFamily: 'Judson'}}>Choose your Desired Template</h1><br /><br />
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
    <div class="text-center">
      <img
        src="https://placehold.co/200x300"
        alt="Green Classic Resume Template"
        class="mx-auto mb-4"
      />
      <p class="text-lg font-semibold">Green Classic Resume Template</p>
      <div class="flex justify-center mt-2">
        <span class="text-yellow-500">★★★★☆</span>
      </div>
    </div>
    <div class="text-center">
      <img src="https://placehold.co/200x300" alt="Office Resume Template" class="mx-auto mb-4" />
      <p class="text-lg font-semibold">Office Resume Template</p>
      <div class="flex justify-center mt-2">
        <span class="text-yellow-500">★★★★★</span>
      </div>
    </div>
    <div class="text-center">
      <img src="https://placehold.co/200x300" alt="Simple Resume Template" class="mx-auto mb-4" />
      <p class="text-lg font-semibold">Simple Resume Template</p>
      <div class="flex justify-center mt-2">
        <span class="text-yellow-500">★★★★☆</span>
      </div>
    </div>
    <div class="text-center">
      <img src="https://placehold.co/200x300" alt="Plain Resume Template" class="mx-auto mb-4" />
      <p class="text-lg font-semibold">Plain Resume Template</p>
      <div class="flex justify-center mt-2">
        <span class="text-yellow-500">★★★★★</span>
      </div>
    </div>
    <div class="text-center">
      <img
        src="https://placehold.co/200x300"
        alt="Pink Simple Resume Template"
        class="mx-auto mb-4"
      />
      <p class="text-lg font-semibold">Pink Simple Resume Template</p>
      <div class="flex justify-center mt-2">
        <span class="text-yellow-500">★★★★☆</span>
      </div>
    </div>
    <div class="text-center">
      <img
        src="https://placehold.co/200x300"
        alt="Pink Simple Resume Template"
        class="mx-auto mb-4"
      />
      <p class="text-lg font-semibold">Pink Simple Resume Template</p>
      <div class="flex justify-center mt-2">
        <span class="text-yellow-500">★★★★☆</span>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
