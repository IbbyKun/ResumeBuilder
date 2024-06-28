import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import image from '../Styles/external/Capture-removebg-preview 1.png'


const styles = {
  mainbackground: {
    background: 'linear-gradient(180deg, #3E1F47, #144552)',
    minHeight: '100vh',
    overflowX: 'hidden',
  },
  roundedContainerLeft: {
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderTopLeftRadius: '1.9rem',
    borderBottomLeftRadius: '1.9rem',
  },
  roundedContainerRight: {
    borderTopRightRadius: '1.9rem',
    borderBottomRightRadius: '1.9rem',
    backgroundColor: 'white',
  },
  textWhite: {
    color: 'white',
    fontFamily: 'Judson',
  },
  textPurple: {
    color: '#74148F',
    fontFamily: 'Judson',
  },
  textCenter: {
    textAlign: 'center',
    fontFamily: 'Judson',
  },
  textZinc900: {
    color: '#144552',
  },
  buttonPurple: {
    backgroundColor: '#B58AC1',
    color: '#144552',
  },
  buttonRed: {
    backgroundColor: '#4D194D',
  },
  buttonHover: {
    backgroundColor: '#B58AC1',
    color: '#144552',
    transition: 'background-color 300ms',
  },
  input: {
    border: '1px solid #ccc',
    borderRadius: '0.25rem',
    padding: '0.5rem',
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'Judson',
  },
};

export default function Signin() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/login', {
        email,
        password,
      });


      if (res.data === 'exist') {
        history('/page2', { state: { id: email } });
      } else if (res.data === 'notexist') {
        alert('User has not signed up');
      } else {
        alert('Wrong details');
      }
    } catch (e) {
      console.log(e);
      alert('Wrong details');
    }
  }
  return (
    <div style={styles.mainbackground}>
      <div className="min-h-screen flex items-center justify-center">
        <div className="rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
          <div style={{ ...styles.roundedContainerLeft, ...styles.textWhite }} className="md:w-2/5 p-8 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold mb-4">
              Sign-Up to your account
            </h2>
            <img
                src={image}
              alt="Sign-Up Illustration"
              className="w-7/5"
            />
          </div>
          <div style={{ ...styles.roundedContainerRight }} className="md:w-3/5 p-8 relative z-0">
            <h2 style={{ ...styles.textCenter, ...styles.textPurple }} className="text-3xl font-bold">
              Welcome Back
            </h2>
            <form className="space-y-4">
              <div className="coolinput">
                <label htmlFor="input" className="text" style={styles.textblack}>
                  E-mail
                </label>
                <input
                  type="text"
                  placeholder="Write here..."
                  name="input"
                  className="input"
                  style={styles.input}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="coolinput">
                <label htmlFor="input" className="text" style={styles.textblack}>
                  Password
                </label>
                <input
                  type="text"
                  placeholder="Write here..."
                  name="input"
                  className="input"
                  style={styles.input}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-zinc-300 rounded"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 block"
                    style={{ ...styles.textZinc900, ...styles.textblack }}
                  >
                    Keep me Logged-in
                  </label>
                </div>
                <a
                  href="#"
                  className="text-purple-600 hover:underline"
                  style={styles.textblack}
                >
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white py-2 rounded-md hover:bg-purple-600 transition duration-300"
                style={{ ...styles.buttonPurple, ...styles.textWhite }}
                onClick={submit}
              >
                Log in
              </button>
            </form>
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-zinc-300"></div>
              <span className="mx-4 text-zinc-500">or</span>
              <div className="flex-grow border-t border-zinc-300"></div>
            </div>
            <button
              className="w-full text-white py-2 rounded-md flex items-center justify-center hover:bg-red-600 transition duration-300"
              style={{ ...styles.buttonRed }}
            >
              <span>
                <i className='bi bi-google'></i>
                <span style={{ ...styles.textWhite }}> Sign-in with Google</span>
              </span>
            </button>
            <p className="mt-4 text-center text-black" style={styles.textWhite}>
              Don’t have an account?{' '}
              <Link to="/signup" className="text-purple-600 hover:underline" >
                Sign-Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
