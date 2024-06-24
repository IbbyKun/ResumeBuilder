// import React from 'react';

// export default function AboutUs() {
//   return (
//     <>
// <div class="text-white py-16 px-8" >
//   <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
//     <div class="md:w-3/5 text-center md:text-left mb-8 md:mb-0">
//       <h2 class="text-4xl font-bold mb-4" style={{fontFamily:"Judson", marginLeft: '40px'}}>About Us</h2>
//       <p class="text-lg leading-relaxed" style={{fontFamily:"Judson", marginLeft: '40px'}}>
//         Our tool Resume Parser is an Artificial Intelligence tool which is used for extracting data
//         from resumes of different people, without consuming extra time. Our time and effort is less.
//         <br /><br />
//         It is also used as resume builder in which applicants can choose their own template and by
//         just giving their required personal information, they can build their own resume without any
//         effort and can be done in short time.
//       </p>
//     </div>
//     <div class="md:w-2/5 flex justify-center">
//       <img src="https://placehold.co/400x300" alt="About Us Image" class="rounded-lg shadow-lg" />
//     </div>
//   </div>
// </div>


//     </>
//   );
// }

import React from 'react';
import image from './Resources/Home2.jpg'

export default function AboutUs() {
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
              width: '60%',
              textAlign: 'left',
              marginBottom: '2rem',
            }}
          >
            <h2
              style={{
                fontSize: '2.25rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                fontFamily: 'Judson',
                marginLeft: '40px',
              }}
            >
              About Us
            </h2>
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.75rem',
                fontFamily: 'Judson',
                marginLeft: '40px',
              }}
            >
              Our tool Resume Parser is an Artificial Intelligence tool which is used for extracting data
              from resumes of different people, without consuming extra time. Our time and effort is less.
              <br /><br />
              It is also used as resume builder in which applicants can choose their own template and by
              just giving their required personal information, they can build their own resume without any
              effort and can be done in short time.
            </p>
          </div>
          <div
            style={{
              width: '40%',
              display: 'flex',
              justifyContent: 'center',
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
        </div>
      </div>
    </>
  );
}
