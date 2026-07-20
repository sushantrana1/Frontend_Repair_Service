import React from 'react'
import { Routes, Route, Router } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from './pages/About';
import Pop from "./components/Pop"
import Login from './pages/Login'
import Signup from './pages/Signup'
import Footer from "./components/Footer";
import Contact from './pages/Contact';
import BookService from './pages/BookService';
import ServicesPage from "./pages/ServicesPage";
import WhyChooseUsPage from "./pages/WhyChooseUsPage";

const App = () => {
  return (
    <>
     <Navbar/>
      <Pop/>
      
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/whychooseus" element={<WhyChooseUsPage />} />
        <Route path ="/contact" element={<Contact/>}/>
        <Route path ="/about" element={<About/>}/>
        <Route path ="/bookservice" element={<BookService/>}/>
        <Route path ="/login" element={<Login/>}/>
        <Route path ="/signup" element={<Signup/>}/>
      </Routes>

      <Footer />
    </>
  )
}

export default App
