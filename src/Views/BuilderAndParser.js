// import React from 'react';

// export default function BuilderAndParser() {
//   return (
//     <>

//       <div
//         className="mainbackground"
//         style={{
//           background: 'linear-gradient(180deg, #3E1F47, #144552)',
//           minHeight: '100vh', // Ensure it covers the full height of the viewport
//           overflowX: 'hidden', // Prevent horizontal overflow
//         }}>

//            {/* Navbar of this Page */}
//       <nav className="text-white p-4" style={{ backgroundColor: '#3E1F47' }}>
//         <div className="container mx-auto flex justify-between items-center">
//           <div className="text-3xl font-serif" style={{ fontFamily: 'Dancing Script' }}>
//             ResumeParser
//           </div>
//           <div className="hidden md:flex space-x-8 text-lg">
//             <a href="/" className="hover:text-zinc-300">
//               Home
//             </a>
//             <a href="/" className="hover:text-zinc-300">
//               Resume Parser
//             </a>
//             <a href="/" className="hover:text-zinc-300">
//               Resume Builder
//             </a>
//           </div>
//           <div className="md:hidden">
//             <button className="text-white focus:outline-none">
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </nav>
//       <div className="md:hidden text-white p-4" id="mobile-menu" style={{ backgroundColor: '#3E1F47' }}>
//         <a href="/" className="block py-2 hover:text-zinc-300">
//           Home
//         </a>
//         <a href="/" className="block py-2 hover:text-zinc-300">
//           Resume Parser
//         </a>
//         <a href="/" className="block py-2 hover:text-zinc-300">
//           Resume Builder
//         </a>
//       </div>
//       {/* Navbar Ends Here */}

//         {/* Main Part of the page, with two Builder and Parser Buttons */}
//         <div>
//           <div className="text-white py-16 px-4 text-center">
//             <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Judson' }}>
//               AI Driven Resume Parser
//             </h1>
//             <p className="mb-8" style={{ fontFamily: 'Judson' }}>
//               With this free, open-source and powerful AI based resume parser and builder
//             </p>
//             <div className="flex justify-center space-x-4 mb-12">
//               <button
//                 className="border border-white text-white py-2 px-4 rounded-full hover:bg-white hover:text-purple-900 transition"
//               >
//                 Resume Parser
//               </button>
//               <button
//                 className="border border-white text-white py-2 px-4 rounded-full hover:bg-white hover:text-purple-900 transition"
//               >
//                 Resume Builder
//               </button>
//             </div>
//             <img
//               src="https://placehold.co/600x400"
//               alt="AI Driven Resume Parser Illustration"
//               className="mx-auto w-full max-w-2xl"
//             />
//           </div>
//         </div>
//         {/* Main Div Ends Here */}

//         {/* About Resume Parser */}
//         <div className="text-white py-16 px-8">
//           <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
//             <div className="md:w-2/5 flex justify-center">
//               <img src="https://placehold.co/400x300" alt="About Us Image" className="rounded-lg shadow-lg" />
//             </div>
//             <div className="md:w-3/5 text-center md:text-left mb-8 md:mb-0">
//               <h2
//                 className="text-4xl font-bold mb-4"
//                 style={{ fontFamily: 'Judson', marginRight: '40px', fontSize: '4rem' }}
//               >
//                 About Resume Parser
//               </h2>
//               <br />
//               <p
//                 className="text-lg leading-relaxed"
//                 style={{ fontFamily: 'Judson', marginRight: '40px' }}
//               >
//                 Our tool, Resume Parser, is a deep learning/AI framework designed to revolutionize
//                 the hiring process. The resume parser swiftly and accurately extracts, analyzes
//                 stores, organizes, and enriches relevant information from resumes usingtaxonomies.
//                 It acts as a compiler, transforming unstructured data into structured data, all at
//                 remarkable speeds, far exceeding human capabilities.
//               </p>
//               <br />
//               <button
//                 className="border border-white text-white py-2 px-4 rounded-full hover:bg-white hover:text-black transition"
//               >
//                 Use The Tool
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* About Resume Builder */}
//         <div className="text-white py-16 px-8">
//           <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
//             <div className="md:w-3/5 text-center md:text-left mb-8 md:mb-0">
//               <h2
//                 className="text-4xl font-bold mb-4"
//                 style={{ fontFamily: 'Judson', marginLeft: '40px', fontSize: '4rem' }}
//               >
//                 About Resume Builder
//               </h2>
//               <br />
//               <p
//                 className="text-lg leading-relaxed"
//                 style={{ fontFamily: 'Judson', marginLeft: '40px' }}
//               >
//                 Our resume builder uses Artificial Intelligence for creating effective resumes
//                 for different people with different designations. It actually offers a user-friendly
//                 platform with a variety of professionally designated templates, allowing individuals
//                 for entering their details. Users just have to enter all their personal information
//                 which is required for any resume. It also provides guidance to their users to
//                 strengthen them and creating a document that captures the attention of the potential
//                 employers.
//               </p>
//               <br />
//               <button
//                 className="border border-white text-white py-2 px-4 rounded-full hover:bg-white hover:text-black transition"
//               >
//                 Use The Tool
//               </button>
//             </div>
//             <div className="md:w-2/5 flex justify-center">
//               <img src="https://placehold.co/400x300" alt="About Us Image" className="rounded-lg shadow-lg" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React from 'react';
import image1 from '../Styles/external/Flat_Web_Design.png';
import image2 from '../Styles/external/Financial_data_Customizable_Cartoon_Illustrations___Bro_Style-removebg-preview 1.png';
import image3 from '../Styles/external/download-removebg-preview 1.png';
import { Link } from 'react-router-dom';
import { ReactComponent as DiamondIcon } from '../Assets/diamond-svgrepo-com.svg'; // Replace './diamond.svg' with your actual SVG file path

export default function BuilderAndParser() {
  return (
    <>
      <div
        className="mainbackground"
        style={{
          background: 'linear-gradient(180deg, #3E1F47, #144552)',
          minHeight: '100vh',
          overflowX: 'hidden',
        }}
      >
        {/* Navbar of this Page */}
        <div>
          <nav style={{ backgroundColor: '#3E1F47', padding: '1rem 2rem' }}>
            <div
              style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '2rem',
                  fontFamily: 'Dancing Script',
                  color: 'white',
                }}
              >
                ResumeParser
              </div>
              <div className="hidden md:flex space-x-8 text-lg">
                <a
                  href="/"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                >
                  Home
                </a>
                <a
                  href="/home"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                >
                  Resume Builder
                </a>
                <a
                  href="/parser"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                >
                  Resume Parser
                </a>
              </div>
              <div className="md:hidden">
                <button className="text-white focus:outline-none">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </nav>
          <div
            className="md:hidden text-white p-4"
            id="mobile-menu"
            style={{ backgroundColor: '#3E1F47' }}
          >
            <a
              href="/"
              className="block py-2 hover:text-zinc-300"
              style={{ textDecoration: 'none' }}
            >
              Home
            </a>
            <a
              href="/"
              className="block py-2 hover:text-zinc-300"
              style={{ textDecoration: 'none' }}
            >
              Resume Builder
            </a>
            <a
              href="/"
              className="block py-2 hover:text-zinc-300"
              style={{ textDecoration: 'none' }}
            >
              Resume Parser
            </a>
          </div>
        </div>
        {/* Navbar Ends Here */}

        {/* Main Part of the page, with two Builder and Parser Buttons */}
        <div
          style={{ color: 'white', padding: '4rem 2rem', textAlign: 'center' }}
        >
          <h1
            style={{
              fontSize: '4rem',
              fontFamily: 'Judson',
              marginBottom: '2rem',
            }}
          >
            AI Driven Resume Parser
          </h1>
          <p style={{ fontFamily: 'Judson', marginBottom: '2rem' }}>
            With this free, open-source and powerful AI based resume parser and
            builder
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '3rem',
              position: 'relative', // Ensure the relative positioning for absolute positioning of the icon
            }}
          >
            {/* Diamond Icon */}
            <DiamondIcon
              style={{
                position: 'absolute',
                left: '30rem', // Adjust as per your design
                top: '50%',
                transform: 'translateY(-50%)',
                width: '1rem',
                fill: 'white', // Adjust color as needed
              }}
            />
            {/* Resume Parser Button */}
            <Link to="/parser">
              <button
                style={{
                  border: '1px solid white',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '999px',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s, color 0.3s',
                  paddingLeft: '2.5rem', // Ensure space for the icon
                }}
              >
                Resume Parser
              </button>
            </Link>
            {/* Resume Builder Button */}
            <Link to="/home">
              <button
                style={{
                  border: '1px solid white',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '999px',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s, color 0.3s',
                  paddingLeft: '2.5rem', // Ensure space for the icon
                }}
              >
                Resume Builder
              </button>
            </Link>
          </div>
          <img
            src={image1}
            alt="AI Driven Resume Parser Illustration"
            style={{
              display: 'block',
              maxWidth: '100%',
              margin: '0 auto',
              marginBottom: '2rem',
            }}
          />
        </div>
        {/* Main Div Ends Here */}

        {/* About Resume Parser */}
        <div style={{ color: 'white', padding: '4rem 2rem' }}>
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                flex: '2 1 0%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src={image2}
                alt="About Us Image"
                style={{
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  maxWidth: '100%',
                }}
              />
            </div>
            <div style={{ flex: '3 1 0%', textAlign: 'left' }}>
              <h2
                style={{
                  fontFamily: 'Judson',
                  fontSize: '4rem',
                  marginBottom: '2rem',
                }}
              >
                About Resume Parser
              </h2>
              <p style={{ fontFamily: 'Judson', marginBottom: '2rem' }}>
                Our tool, Resume Parser, is a deep learning/AI framework
                designed to revolutionize the hiring process. The resume parser
                swiftly and accurately extracts, analyzes, stores, organizes,
                and enriches relevant information from resumes using taxonomies.
                It acts as a compiler, transforming unstructured data into
                structured data, all at remarkable speeds, far exceeding human
                capabilities.
              </p>
              <button
                style={{
                  border: '1px solid white',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '999px',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s, color 0.3s',
                }}
              >
                Use The Tool
              </button>
            </div>
          </div>
        </div>

        {/* About Resume Builder */}
        <div style={{ color: 'white', padding: '4rem 2rem' }}>
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                flex: '2 1 0%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src={image3}
                alt="About Us Image"
                style={{
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  maxWidth: '100%',
                }}
              />
            </div>
            <div style={{ flex: '3 1 0%', textAlign: 'left' }}>
              <h2
                style={{
                  fontFamily: 'Judson',
                  fontSize: '4rem',
                  marginBottom: '2rem',
                }}
              >
                About Resume Builder
              </h2>
              <p style={{ fontFamily: 'Judson', marginBottom: '2rem' }}>
                Our resume builder uses Artificial Intelligence for creating
                effective resumes for different people with different
                designations. It actually offers a user-friendly platform with a
                variety of professionally designated templates, allowing
                individuals for entering their details. Users just have to enter
                all their personal information which is required for any resume.
                It also provides guidance to their users to strengthen them and
                creating a document that captures the attention of the potential
                employers.
              </p>
              <button
                style={{
                  border: '1px solid white',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '999px',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s, color 0.3s',
                }}
              >
                Use The Tool
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
