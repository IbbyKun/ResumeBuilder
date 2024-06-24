// import React from 'react';


// export default function LandingWidget() {
    
//   return (
//     <>
//    <div
//   class="flex flex-col md:flex-row items-center justify-center min-h-screen  text-white p-6"
// >
//   <div class="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
//     <h1 class="text-4xl md:text-5xl font-bold mb-4" style={{textAlign: 'left', marginLeft: '40px', fontFamily: 'Judson'}}>Your next big idea starts here</h1>
//     <p class="text-lg mb-6" style={{textAlign: 'left', marginLeft: '40px', fontFamily: 'Judson'}}>The ideal framework to learn how to parse and build resumes</p>
//     <button
//       class="bg-white text-purple-700 font-semibold py-2 px-6 rounded-full flex items-center justify-center mx-auto md:mx-0"
//       style={{float: 'left', marginLeft: '40px'}}
//     >
//       Start Here
//       <svg
//         class="ml-2 w-4 h-4"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           stroke-width="2"
//           d="M5 12h14m-7-7l7 7-7 7"
//         ></path>
//       </svg>
//     </button>
//   </div>
//   <div class="md:w-1/2 flex justify-center">
//     <img src="https://placehold.co/400x300" alt="Illustration" class="w-full max-w-md" />
//   </div>
// </div>

//     </>
//   );
// }


import React from 'react';
import image from './Resources/Home1.jpg'

export default function LandingWidget() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          color: 'white',
          padding: '1.5rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '50%',
              textAlign: 'center',
              marginBottom: '2rem',
              marginLeft: '40px',
              fontFamily: 'Judson',
            }}
          >
            <h1
              style={{
                fontSize: '2.25rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                textAlign: 'left',
              }}
            >
              Your next big idea starts here
            </h1>
            <p
              style={{
                fontSize: '1.125rem',
                marginBottom: '1.5rem',
                textAlign: 'left',
              }}
            >
              The ideal framework to learn how to parse and build resumes
            </p>
            <button
              style={{
                backgroundColor: 'white',
                color: '#6B46C1',
                fontWeight: '600',
                padding: '0.5rem 1.5rem',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: '40px',
              }}
            >
              Start Here
              <svg
                style={{ marginLeft: '0.5rem', width: '1rem', height: '1rem' }}
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
          <div style={{ width: '100%', maxWidth: '50%', display: 'flex', justifyContent: 'center' }}>
            <img
              src={image}
              alt="Illustration"
              style={{ width: '100%', maxWidth: '25rem' }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
