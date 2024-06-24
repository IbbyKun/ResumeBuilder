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
  input: {
    border: '1px solid #ccc',
    borderRadius: '0.25rem',
    padding: '0.5rem',
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'Judson',
  },
  buttonPurple: {
    backgroundColor: '#B58AC1',
    color: '#144552',
    fontFamily: 'Judson',
    transition: 'background-color 300ms',
  },
  buttonRed: {
    backgroundColor: '#4D194D',
    fontFamily: 'Judson',
  },
};

export default function SignUp() {
  const history = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    if (password.trim() !== confirmPassword.trim()) {
      alert('Password and confirm password do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/signup', {
        // Changed port to 8000
        name,
        email,
        password,
      });

      if (response.data === 'exist') {
        alert('User already exists');
      } else if (response.data === 'notexist') {
        history('/home', { state: { id: email } });
      } else {
        alert('Failed to sign up'); // Improved error message
      }
    } catch (e) {
      console.error('Error:', e); // Improved error logging
      alert('Failed to sign up');
    }
  }

  return (
    <div style={styles.mainbackground}>
      <div className="min-h-screen flex items-center justify-center">
        <div className="rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
          <div
            style={{ ...styles.roundedContainerLeft, ...styles.textWhite }}
            className="md:w-2/5 p-8 flex flex-col justify-center items-center"
          >
            <h2 className="text-3xl font-bold mb-4">Sign-Up to your account</h2>
            <img
              src={image}
              alt="Sign-Up Illustration"
              className="w-7/5"
            />
          </div>
          <div
            style={{ ...styles.roundedContainerRight }}
            className="md:w-3/5 p-8 relative z-0"
          >
            <h2
              style={{ ...styles.textCenter, ...styles.textPurple }}
              className="text-3xl font-bold"
            >
              Create Account
            </h2>
            <form className="row g-3">
              <div className="col-md-6">
                <div className="coolinput">
                  <label
                    htmlFor="input"
                    className="text"
                    style={styles.textblack}
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="input"
                    className="input"
                    style={styles.input}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="coolinput">
                  <label
                    htmlFor="input"
                    className="text"
                    style={styles.textblack}
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="input"
                    className="input"
                    style={styles.input}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="coolinput">
                  <label
                    htmlFor="input"
                    className="text"
                    style={styles.textblack}
                  >
                    E-mail
                  </label>
                  <input
                    type="text"
                    name="input"
                    className="input"
                    style={styles.input}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="coolinput">
                  <label
                    htmlFor="input"
                    className="text"
                    style={styles.textblack}
                  >
                    Password
                  </label>
                  <input
                    type="text"
                    name="input"
                    className="input"
                    style={styles.input}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </form>
            <div
              className="flex items-center justify-between"
              style={{ height: '30px' }}
            >
              <div className="flex items-center"></div>
            </div>
            <button
              type="submit"
              className="w-full text-white py-2 rounded-md hover:bg-purple-600 transition duration-300"
              style={styles.buttonPurple}
              onClick={submit}
            >
              Create Account
            </button>
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-zinc-300"></div>
              <span className="mx-4 text-zinc-500">or</span>
              <div className="flex-grow border-t border-zinc-300"></div>
            </div>
            <button
              className="w-full text-white py-2 rounded-md flex items-center justify-center hover:bg-red-600 transition duration-300"
              style={styles.buttonRed}
            >
              <span>
                <i className="bi bi-google"></i>
                <span style={styles.textWhite}> Sign-in with Google</span>
              </span>
            </button>
            <p
              className="mt-4 text-center text-zinc-700"
              style={styles.textblack}
            >
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-purple-600 hover:underline"
                style={styles.textblack}
              >
                Sign-in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
