// import React from 'react'

// export default function Mission() {
//   return (
//     <>
//     <div className="text-white py-16 px-8">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
//         <div className="md:w-2/5 flex justify-center">
//           <img src="https://placehold.co/400x300" alt="About Us Image" className="rounded-lg shadow-lg" />
//         </div>
//         <div className="md:w-3/5 text-center md:text-left mb-8 md:mb-0">
//           <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "Judson" , marginRight: '40px'}}>Our Mission</h2>
//           <p className="text-lg leading-relaxed" style={{ fontFamily: "Judson" , marginRight: '40px'}}>
//           Empowering individuals to craft compelling resumes effortlessly, and aiding recruiters
//            in efficiently extracting vital candidate information.
//           </p>
//         </div>
//       </div>
//     </div>
//   </>
//   )
// }


import React from 'react';
import image from './Resources/Home3.jpg'

export default function Mission() {
  return (
    <>
      <div
        style={{
          color: 'white',
          paddingTop: '4rem',
          paddingBottom: '4rem',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            maxWidth: '96rem',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '40%',
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '2rem',
            }}
          >
            <img
              src={image}
              alt="About Us Image"
              style={{
                borderRadius: '0.5rem',
                boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                width: '100%',
                maxWidth: '25rem',
              }}
            />
          </div>
          <div
            style={{
              width: '60%',
              textAlign: 'left',
            }}
          >
            <h2
              style={{
                fontSize: '2.25rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                fontFamily: 'Judson',
                marginRight: '40px',
              }}
            >
              Our Mission
            </h2>
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.75rem',
                fontFamily: 'Judson',
                marginRight: '40px',
              }}
            >
              Empowering individuals to craft compelling resumes effortlessly, and aiding recruiters
              in efficiently extracting vital candidate information.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
