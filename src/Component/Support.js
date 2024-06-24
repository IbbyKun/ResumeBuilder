// import React from 'react';

// export default function Support() {
//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-md-6 p-0"> {/* Set padding to 0 */}
//           <div className="flex flex-col md:flex-row items-center justify-center min-h-screen"  style={{
//         background: 'linear-gradient(180deg, #74148F, #B58AC1)',
//       }}>
            
//             <img
//             src="/external/IconRemovebgPreview1.png"
//             alt="paper plane icon 2"
//             style={{width: '400px', height: '400px', marginLeft: '100px'}}
//           />
//               <img
//             src="/external/DownloadPremiumPngOfPngDirectMessageIconForSocialMediaAppPaperPlaneIllustrationByNingAboutNeonIconsNeonNeonPngPlaneAndIconPng2873764RemovebgPreview1.png"
//             alt="paper plane icon 2"
//             style={{transform:"rotateY(180deg)", width: '300px', height: '300px', marginRight: '100px'}}
//           />
//           </div>
//         </div>
//         <div className="col-md-6 p-0"> {/* Set padding to 0 */}
//           <div className="flex flex-col items-center justify-center min-h-screen"  style={{
//         background: 'linear-gradient(180deg, #74148F, #B58AC1)',
//       }}>
//             <div className="text-center md:text-left text-white">
//               <h2 className="text-2xl font-semibold mb-2">Get in touch with us</h2>
//               <div className="h-1 w-16 bg-white mx-auto md:mx-0 mb-4"></div>
//               <p className="mb-6">support@resumeparser.com</p>
//               <div className="flex space-x-6 justify-center md:justify-start">
//                 <button className="bg-white text-purple-600 px-4 py-2 rounded-full">Privacy Policy</button>
//                 <button className="bg-white text-purple-600 px-4 py-2 rounded-full">Terms of Use</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import image1 from '../Styles/assets/images/IconRemovebgPreview1.png';
import image2 from '../Styles/assets/images/DownloadPremiumPngOfPngDirectMessageIconForSocialMediaAppPaperPlaneIllustrationByNingAboutNeonIconsNeonNeonPngPlaneAndIconPng2873764RemovebgPreview1.png';

export default function Support() {
  return (
    <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ flex: '1 1 50%', padding: '0' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            background: 'linear-gradient(180deg, #74148F, #B58AC1)',
          }}
        >
          <img
            src={image1}
            alt="paper plane icon 1"
            style={{ width: '300px', height: '300px', marginLeft: '100px' }}
          />
          <img
            src={image2}
            alt="paper plane icon 2"
            style={{ transform: 'rotateY(180deg)', width: '200px', height: '200px', marginRight: '100px' }}
          />
        </div>
      </div>
      <div style={{ flex: '1 1 50%', padding: '0' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            background: 'linear-gradient(180deg, #74148F, #B58AC1)',
          }}
        >
          <div style={{ textAlign: 'center', color: 'white' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '0.5rem' }}>Get in touch with us</h2>
            <div style={{ height: '0.25rem', width: '4rem', backgroundColor: 'white', margin: '0 auto 1rem auto' }}></div>
            <p style={{ marginBottom: '1.5rem' }}>support@resumeparser.com</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
              <button
                style={{
                  backgroundColor: 'white',
                  color: '#6B46C1',
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Privacy Policy
              </button>
              <button
                style={{
                  backgroundColor: 'white',
                  color: '#6B46C1',
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Terms of Use
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
