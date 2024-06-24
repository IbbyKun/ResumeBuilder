// import React from 'react'

// export default function Navbar() {
//   return (
//     <div>
//       <nav className="text-white p-4" style={{ backgroundColor: '#3E1F47' }}>
//         <div className="container mx-auto flex justify-between items-center">
//           <div className="text-3xl font-serif" style={{fontFamily: 'Dancing Script'}}>ResumeParser</div>
//           <div className="hidden md:flex space-x-8 text-lg">
//             <a href="/" className="hover:text-zinc-300">About Us</a>
//             <a href="/" className="hover:text-zinc-300">Mission</a>
//             <a href="/" className="hover:text-zinc-300">Vision</a>
//             <a href="/" className="hover:text-zinc-300">Benefits</a>
//             <a href="/" className="hover:text-zinc-300">Reviews</a>
//             <a href="/" className="hover:text-zinc-300">Contact</a>
//           </div>
//           <div className="md:hidden">
//             <button className="text-white focus:outline-none">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </nav>
//       <div className="md:hidden  text-white p-4" id="mobile-menu" style={{ backgroundColor: '#3E1F47' }}>
//         <a href="/" className="block py-2 hover:text-zinc-300">About Us</a>
//         <a href="/" className="block py-2 hover:text-zinc-300">Mission</a>
//         <a href="/" className="block py-2 hover:text-zinc-300">Vision</a>
//         <a href="/" className="block py-2 hover:text-zinc-300">Benefits</a>
//         <a href="/" className="block py-2 hover:text-zinc-300">Reviews</a>
//         <a href="/" className="block py-2 hover:text-zinc-300">Contact</a>
//       </div>
//     </div>
//   );
// }


import React from 'react';

export default function Navbar() {
  return (
    <div>
      <nav style={{ backgroundColor: '#3E1F47', padding: '1rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '2rem', fontFamily: 'Dancing Script', color: 'white' }}>ResumeParser</div>
          <div className="hidden md:flex space-x-8 text-lg">
            <a href="/" style={{ color: 'white', textDecoration: 'none', transition: 'color 0.3s ease' }}>About Us</a>
            <a href="/" style={{ color: 'white', textDecoration: 'none', transition: 'color 0.3s ease' }}>Mission</a>
            <a href="/" style={{ color: 'white', textDecoration: 'none', transition: 'color 0.3s ease' }}>Vision</a>
            <a href="/" style={{ color: 'white', textDecoration: 'none', transition: 'color 0.3s ease' }}>Benefits</a>
            <a href="/" style={{ color: 'white', textDecoration: 'none', transition: 'color 0.3s ease' }}>Reviews</a>
            <a href="/" style={{ color: 'white', textDecoration: 'none', transition: 'color 0.3s ease' }}>Contact</a>
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
        <a href="/" className="block py-2 hover:text-zinc-300" style={{ textDecoration: 'none' }}>About Us</a>
        <a href="/" className="block py-2 hover:text-zinc-300" style={{ textDecoration: 'none' }}>Mission</a>
        <a href="/" className="block py-2 hover:text-zinc-300" style={{ textDecoration: 'none' }}>Vision</a>
        <a href="/" className="block py-2 hover:text-zinc-300" style={{ textDecoration: 'none' }}>Benefits</a>
        <a href="/" className="block py-2 hover:text-zinc-300" style={{ textDecoration: 'none' }}>Reviews</a>
        <a href="/" className="block py-2 hover:text-zinc-300" style={{ textDecoration: 'none' }}>Contact</a>
      </div>
    </div>
  );
}
