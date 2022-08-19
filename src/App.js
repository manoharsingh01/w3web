import React from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Service from './pages/Service/Service'
import Portfolio from './pages/Portfolio/Portfolio'
import Career from './pages/Career/Career';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Lists from './Data/Home/Services';
import OurWorkList from './Data/Home/OurWorks';

function App() {
  return (
    <>
      <Header pageLogo="about.jpg"/>
      <Routes>
        <Route path="/" element={<Home ServiceLists={Lists} OurWorksData={OurWorkList} />} />
        <Route path="about" element={<About title="About Page"/>} />
        <Route path="service" element={<Service />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="career" element={<Career/>} />
        <Route path="blog" element={<Blog/>} />
        <Route path="contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App