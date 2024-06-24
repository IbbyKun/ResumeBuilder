import React from 'react';
import '../Styles/signin.css';

export default function ResumeForm() {
  return (
    <div
      className="mainbackground"
      style={{
        background: 'linear-gradient(180deg, #3E1F47, #144552)',
        minHeight: '100vh', // Ensure it covers the full height of the viewport
        overflowX: 'hidden', // Prevent horizontal overflow
      }}
    >
      <div className="row mainrow" style={{ backgroundColor: 'white' }}>
        <div className="col-7">
          <h1 style={{ fontFamily: 'Judson', fontSize: '3rem', color: '#4D194D' }}>
            Personal Information
          </h1>

          <form className="row g-3">
            <div className="col-12">
              <div className="coolinput">
                <label htmlFor="input" className="text">
                  E-mail
                </label>
                <input
                  type="text"
                  name="input"
                  className="input"
                />
              </div>
            </div>

            <div className="col-12">
              <div className="coolinput">
                <label htmlFor="input" className="text">
                  Password
                </label>
                <input
                  type="text"
                  name="input"
                  className="input"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="coolinput">
                <label htmlFor="input" className="text">
                  First Name
                </label>
                <input
                  type="text"
                  name="input"
                  className="input"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="coolinput">
                <label htmlFor="input" className="text">
                  Last Name
                </label>
                <input
                  type="text"
                  name="input"
                  className="input"
                />
              </div>
            </div>

            <div className="col-12">
              <div className="coolinput">
                <label htmlFor="input" className="text">
                  Password
                </label>
                <input
                  type="text"
                  name="input"
                  className="input"
                />
              </div>
            </div>

            <div className="col-12">
              <h1 style={{ fontFamily: 'Judson', fontSize: '3rem', color: '#4D194D' }}>
                Work Experience
              </h1>
            </div>

            <div className="col-12">
              <div className="coolinput">
                <label htmlFor="input" className="text">
                  Password
                </label>
                <input
                  type="text"
                  name="input"
                  className="input"
                />
              </div>
            </div>

            <div className="col-12">
              <div className="coolinput">
                <label htmlFor="input" className="text">
                  Password
                </label>
                <input
                  type="text"
                  name="input"
                  className="input"
                />
              </div>
            </div>

            <div className="col-12">
              <div className="coolinput">
                <label htmlFor="input" className="text">
                  Password
                </label>
                <input
                  type="text"
                  name="input"
                  className="input"
                />
              </div>
            </div>

            <div className="col-12">
              <h1 style={{ fontFamily: 'Judson', fontSize: '3rem', color: '#4D194D' }}>
                Education
              </h1>
            </div>

            <div className="col-md-6">
              <div className="coolinput">
                <label htmlFor="input" className="text">
                  First Name
                </label>
                <input
                  type="text"
                  name="input"
                  className="input"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="coolinput">
                <label htmlFor="input" className="text">
                  Last Name
                </label>
                <input
                  type="text"
                  name="input"
                  className="input"
                />
              </div>
            </div>

            <div className="col-md-8">
              <div className="coolinput">
                <label htmlFor="input" className="text">
                  First Name
                </label>
                <input
                  type="text"
                  name="input"
                  className="input"
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="coolinput">
                <label htmlFor="input" className="text">
                  Last Name
                </label>
                <input
                  type="text"
                  name="input"
                 className="input"
                />
              </div>
            </div>

            <div className="col-12">
              <div className="coolinput">
                <label htmlFor="input" className="text">
                  Password
                </label>
                <input
                  type="text"
                  name="input"
                  className="input"
                />
              </div>
            </div>

            <div className="col-12">
              <h1 style={{ fontFamily: 'Judson', fontSize: '3rem', color: '#4D194D' }}>
                Projects
              </h1>
            </div>

            <div className="col-md-6">
              <div className="coolinput">
                <label htmlFor="input" className="text">
                  First Name
                </label>
                <input
                  type="text"
                  name="input"
                  className="input"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="coolinput">
                <label htmlFor="input" className="text">
                  Last Name
                </label>
                <input
                  type="text"
                  name="input"
                  className="input"
                />
              </div>
            </div>

            <div className="col-12">
              <div className="coolinput">
                <label htmlFor="input" className="text">
                  Description
                </label>
                <textarea
                  type="text"
                  name="input"
                  className="input"
                />
              </div>
            </div>

            <div className="col-12">
              <h1 style={{ fontFamily: 'Judson', fontSize: '3rem', color: '#4D194D' }}>
                Skills
              </h1>
            </div>

            <div className="col-12">
              <div className="coolinput">
                <label htmlFor="input" className="text">
                  Skills List
                </label>
                <textarea
                  type="text"
                  name="input"
                  className="input"
                />
              </div>
            </div>

            <div className="col-12">
              <h1 style={{ fontFamily: 'Judson', fontSize: '3rem', color: '#4D194D' }}>
                Featured Skills <span style={{fontSize: '1rem'}}>(optionl)</span>
              </h1>
            </div>

          </form>
        </div>

        <div className="col-5">
            
        </div>
      </div>
    </div>
  );
}