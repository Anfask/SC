import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Swal from 'sweetalert2';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        studyDestination: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.firstName || !formData.lastName || !formData.email || !formData.contactNumber || !formData.studyDestination || !formData.message) {
            Swal.fire("Error", "All fields are required!", "error");
            return;
        }

        if (!validateEmail(formData.email)) {
            Swal.fire("Error", "Please enter a valid email address!", "error");
            return;
        }

        if (!/^\d{10}$/.test(formData.contactNumber)) {
            Swal.fire("Error", "Please enter a valid 10-digit contact number!", "error");
            return;
        }

        Swal.fire("Success", "We will contact you back soon!", "success");

        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            contactNumber: '',
            studyDestination: '',
            message: ''
        });
    };

    return (
        <div className="contact-main">
                        <div className="contact-header">
                <h1>GET IN TOUCH</h1>
                <p>Let's go to Best Higher Education!</p>
            </div>
            <div className="contact-container">
                <div className="info-section">
                    <div className="info-item">
                        <Mail size={24} />
                        <div>
                            <p>Email Us:</p>
                            <p><strong>info@schambersedu.com</strong></p>
                        </div>
                    </div>
                    <div className="info-item">
                        <Phone size={24} />
                        <div>
                            <p>Call Us:</p>
                            <p><strong>0495 - 27 24 888</strong></p>
                            <p><strong>+91 9995 878 088</strong></p>
                        </div>
                    </div>
                    <div className="info-item">
                        <MapPin size={24} />
                        <div>
                            <p>Find Us:</p>
                            <p><strong>2nd, Trinity Arcade, Kannur Rd,</strong></p>
                            <p><strong>Next to ESAF Bank West Nadakkav, Vellayil,</strong></p>
                            <p><strong>Kozhikkode, Kerala 673011, India</strong></p>
                        </div>
                    </div>
                    <div className="info-item">
                        <Clock size={24} />
                        <div>
                            <p>Work Hours:</p>
                            <p><strong>Mon-Sat: 10AM to 5PM</strong></p>
                            <p><strong>Sunday: Closed</strong></p>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required 
                        />
                        <input 
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required 
                        />
                        <input 
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required 
                        />
                        <input 
                            type="text"
                            name="contactNumber"
                            placeholder="🇮🇳 Mobile Number"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            required 
                        />
                        <select 
                            name="studyDestination"
                            value={formData.studyDestination}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Study Destination</option>
                            <option value="USA">🇺🇸 USA</option>
                            <option value="Australia">🇦🇺 Australia</option>
                            <option value="UK">🇬🇧 UK</option>
                            <option value="Germany">🇩🇪 Germany</option>
                            <option value="Canada">🇨🇦 Canada</option>
                            <option value="Ireland">🇮🇪 Ireland</option>
                            <option value="Dubai">🇦🇪 Dubai</option>
                            <option value="Singapore">🇸🇬 Singapore</option>
                            <option value="Switzerland">🇨🇭 Switzerland</option>
                            <option value="New Zealand">🇳🇿 New Zealand</option>
                            <option value="Malta">🇲🇹 Malta</option>
                            <option value="France">🇫🇷 France</option>
                            <option value="Spain">🇪🇸 Spain</option>
                            <option value="Malaysia">🇲🇾 Malaysia</option>
                            <option value="Sri Lanka">🇱🇰 Sri Lanka</option>
                            <option value="Others">Others</option>
                        </select>
                        <textarea
                            name="message"
                            placeholder="Your Comments"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;