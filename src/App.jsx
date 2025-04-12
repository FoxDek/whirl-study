import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Partners from './components/Partners.jsx';
import Features from './components/Features.jsx';
import Differences from './components/Differences.jsx';
import About from './components/About.jsx';
import Demo from './components/Demo.jsx';
import Advantages from './components/Advantages.jsx';
import Blog from './components/Blog.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';


function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Partners />
        <Features />
        <Differences />
        <About />
        <Demo />
        <Advantages />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App



