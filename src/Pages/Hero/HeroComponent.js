import React from 'react';
import Navbar from './HomeNavbar';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import About from '../About/About'
import Footer from './Footer';
import {useEffect} from 'react'

export default function Hero() {
  useEffect(() => {
    document.title = "Resume Builder"
  }, []);
  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </>
  );
}
