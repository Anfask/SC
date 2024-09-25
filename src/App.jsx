import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Footer from './components/Footer'; 
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Courses from './pages/Courses';
import Study from './pages/study-destinations';
import Testimonials from './pages/Testimonials';
import ChatBot from './ChatBot';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
    // Mouse move effect to update custom cursor position
    useEffect(() => {
        const handleMouseMove = (e) => {
            const cursor = document.querySelector('.custom-cursor');
            if (cursor) {
                cursor.style.top = `${e.clientY}px`;
                cursor.style.left = `${e.clientX}px`;
            }
        };
        document.addEventListener('mousemove', handleMouseMove);
        // Cleanup the event listener on unmount
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="App">
            <NavBar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/study-destinations" element={<Study />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                </Routes>
            </main>
            <Footer />
            <ChatBot /> {/* Add the ChatBot component here */}
            {/* Custom cursor element */}
            <div className="custom-cursor"></div>
        </div>
    );
};

export default App;
