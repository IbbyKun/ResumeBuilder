import './signin.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:8000/', {
        email,
        password,
      });

      if (res.data === 'exist') {
        history('/home', { state: { id: email } });
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
    <div
      className="mainbackground"
      style={{
        background: 'linear-gradient(180deg, #3E1F47, #144552)',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      <div className="min-h-screen flex items-center justify-center">
        <div className="rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
          <div
            className="md:w-2/5 p-8 flex flex-col justify-center items-center text-white"
            style={{
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderTopLeftRadius: '1.9rem',
              borderBottomLeftRadius: '1.9rem',
            }}
          >
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: 'white', fontFamily: 'Judson' }}
            >
              Sign-Up to your account
            </h2>
            <img
              src="https://placehold.co/300x300"
              alt="Sign-Up Illustration"
              className="w-7/5"
            />
          </div>
          <div
            className="md:w-3/5 p-8 relative z-0"
            style={{
              borderTopRightRadius: '1.9rem',
              borderBottomRightRadius: '1.9rem',
              backgroundColor: 'white',
            }}
          >
            <h2
              className="text-3xl font-bold text-center"
              style={{ fontFamily: 'Judson', color: '#74148F' }}
            >
              Welcome Back
            </h2>
            <form className="space-y-4">
              <div className="coolinput">
                <label htmlFor="input" className="text">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="input"
                  className="input"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="coolinput">
                <label htmlFor="input" className="text">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="input"
                  className="input"
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
                    className="ml-2 block text-zinc-900"
                    style={{ fontFamily: 'Judson' }}
                  >
                    Keep me Logged-in
                  </label>
                </div>
                <a
                  href="#"
                  className="text-purple-600 hover:underline"
                  style={{ fontFamily: 'Judson' }}
                >
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white py-2 rounded-md hover:bg-purple-600 transition duration-300"
                style={{
                  fontFamily: 'Judson',
                  backgroundColor: '#B58AC1',
                  color: '#144552',
                }}
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
              style={{ backgroundColor: '#4D194D' }}
            >
              <span>
                <i className="bi bi-google"></i>
                <span> Sign-in with Google</span>
              </span>
            </button>
            <p
              className="mt-4 text-center text-zinc-700"
              style={{ fontFamily: 'Judson' }}
            >
              Don’t have an account?
              <a
                href="#"
                className="text-purple-600 hover:underline"
                style={{ fontFamily: 'Judson' }}
              >
                <Link to="/signup">Sign Up</Link>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
