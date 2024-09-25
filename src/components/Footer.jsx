import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaChevronRight, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../components/Footer.css';
import Logo from '../assets/logo.png';
import GoogleMapComponent from './GoogleMapComponent';

const Footer = () => {
    return (
        <footer className="footer-container">
                            <div className='loc'>
                    <GoogleMapComponent/>
                </div>
            <div className="footer-content">
                <div className="footer-logo-section">
                    <img src={Logo} alt="" className="footer-logo" />
                    <p className="footer-description">Confused and worried about your higher education? Don't Worry... We got you!
                    </p>
                    <div className="footer-social-icons">
                        <a href="https://facebook.com/schambersedu"><FaFacebook /></a>
                        <a href="https://www.instagram.com/schambersoverseas" target='blank'><FaInstagram /></a>
                        <a href="https://x.com/"><FaTwitter /></a>
                        <a href="https://in.linkedin.com/"><FaLinkedin /></a>
                    </div>
                </div>
                <div className="footer-links-section">
                    <div className="footer-column">
                        <h4>Sitemap</h4>
                        <ul>
                            <li><FaChevronRight /><a href="/about">About Us</a></li>
                            <li><FaChevronRight /><a href="/courses">Courses</a></li>
                            <li><FaChevronRight /><a href="/services">Services</a></li>
                            <li><FaChevronRight /><a href="/study-destinations">Study Destinations</a></li>
                            <li><FaChevronRight /><a href="/Testimonials">Testimonials</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Help</h4>
                        <ul>
                            <li><FaChevronRight /><a href="/contact">Contact</a></li>
                            <li><FaChevronRight /><a href="/faq">FAQ</a></li>
                            <li><FaChevronRight /><a href="/terms">Terms & Conditions</a></li>
                            <li><FaChevronRight /><a href="/privacy">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Contact</h4>
                        <ul>
                            <li>
                                <FaPhone />
                                <span className="footer-contact-info">
                                    <span className="contact-phone">0495 - 27 24 888</span>
                                </span>
                            </li>
                            <li>
                                <FaPhone />
                                <span className="footer-contact-info">
                                    <span className="contact-phone">+91 9995 87 80 88</span>
                                </span>
                            </li>
                            <li>
                                <FaEnvelope />
                                <span className="footer-contact-info">
                                    <span className="contact-email">info@schambersedu.com</span>
                                </span>
                            </li>
                            <li>
                                <FaMapMarkerAlt />
                                <span className="footer-contact-info">
                                    <span className="contact-address">
                                        2nd, Trinity Arcade, Kannur Rd,<br />
                                        Next to ESAF Bank West Nadakkav, Vellayil,<br />
                                        Kozhikkode, Kerala 673011, India
                                    </span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p>© 2024 <span className="span">S'Chambers</span> | All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
