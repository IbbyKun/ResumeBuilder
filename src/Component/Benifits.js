// import React from 'react'
// import '../Styles/benifits.css'

// export default function Benifits() {
//     return (
//       <>
//           <div class="text-center py-4">
//           <h2 class="text-white relative inline-block" style={{fontFamily: 'Judson', fontSize: '3rem'}}>
//             Benefits of using this tool
//             <div class="flex items-center mt-1">
//               <span class="block w-full h-1 bg-white mr-2"></span>
//               <span class="block w-25 h-1 bg-purple-500"></span>
//             </div>
//           </h2>
//         </div>
//         <br />
//         <div className="container">
//           <div className="box dark-pink">
//             <div className="box-content">
//               <i className="bi bi-alarm" style={{ color: 'white', fontSize: '3rem' }}></i>
//               <h2 style={{color: 'white', fontFamily: 'Judson'}}>Time Efficiency</h2><br />
//               <p style={{color: 'white', fontFamily: 'Judson'}}>Resume builders streamline document creation, saving users time through templates and formatting automation.</p>
//             </div>
//           </div>
//           <div className="box light-pink">
//             <div className="box-content">
//               <i className="bi bi-alarm" style={{ color: 'white', fontSize: '3rem' }}></i>
//               <h2 style={{color: 'white', fontFamily: 'Judson'}}>Professional Appearance</h2><br />
//               <p style={{color: 'white', fontFamily: 'Judson'}}>Resume builders enhance presentations with professionally designed templates and formatting choices for a polished look.</p>
//             </div>
//           </div>
//           <div className="box dark-pink">
//             <div className="box-content">
//               <i className="bi bi-person" style={{ color: 'white', fontSize: '3rem' }}></i>
//               <h2 style={{color: 'white', fontFamily: 'Judson'}}>User-friendly Interface</h2><br />
//               <p style={{color: 'white', fontFamily: 'Judson'}}>Resume builders simplify professional resume creation with an intuitive, user-friendly platform, catering to users without advanced design skills.</p>
//             </div>
//           </div>
//         </div>
//         </>
//       );
// }


import React from 'react';

export default function Benifits() {
  return (
    <>
      <div style={{ textAlign: 'center', paddingTop: '1rem', paddingBottom: '1rem' }}>
        <h2 style={{ color: 'white', fontFamily: 'Judson', fontSize: '3rem', position: 'relative', display: 'inline-block' }}>
          Benefits of using this tool
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.25rem' }}>
            <span style={{ display: 'block', width: '100%', height: '0.25rem', backgroundColor: 'white', marginRight: '0.5rem' }}></span>
            <span style={{ display: 'block', width: '6.25rem', height: '0.25rem', backgroundColor: '#6B46C1' }}></span>
          </div>
        </h2>
      </div>
      <br />
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', margin: '0' }}>
      <div style={{ background: 'linear-gradient(180deg, #874D98, #0F0113)', margin: '1rem', padding: '2rem', borderRadius: '0.5rem', flex: '1 1 calc(33% - 2rem)', boxSizing: 'border-box' }}>
          <div style={{ textAlign: 'center' }}>
            <i className="bi bi-alarm" style={{ color: 'white', fontSize: '3rem' }}></i>
            <h2 style={{ color: 'white', fontFamily: 'Judson' }}>Time Efficiency</h2>
            <br />
            <p style={{ color: 'white', fontFamily: 'Judson' }}>
              Resume builders streamline document creation, saving users time through templates and formatting automation.
            </p>
          </div>
        </div>
        <div style={{ background: 'linear-gradient(180deg, #FFFFFF, #3E1F47)', margin: '1rem', padding: '2rem', borderRadius: '0.5rem', flex: '1 1 calc(33% - 2rem)', boxSizing: 'border-box' }}>
          <div style={{ textAlign: 'center' }}>
            <i className="bi bi-alarm" style={{ color: 'white', fontSize: '3rem' }}></i>
            <h2 style={{ color: 'white', fontFamily: 'Judson' }}>Professional Appearance</h2>
            <br />
            <p style={{ color: 'white', fontFamily: 'Judson' }}>
              Resume builders enhance presentations with professionally designed templates and formatting choices for a polished look.
            </p>
          </div>
        </div>
        <div style={{ background: 'linear-gradient(180deg, #874D98, #0F0113)', margin: '1rem', padding: '2rem', borderRadius: '0.5rem', flex: '1 1 calc(33% - 2rem)', boxSizing: 'border-box' }}>
          <div style={{ textAlign: 'center' }}>
            <i className="bi bi-person" style={{ color: 'white', fontSize: '3rem' }}></i>
            <h2 style={{ color: 'white', fontFamily: 'Judson' }}>User-friendly Interface</h2>
            <br />
            <p style={{ color: 'white', fontFamily: 'Judson' }}>
              Resume builders simplify professional resume creation with an intuitive, user-friendly platform, catering to users without advanced design skills.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
