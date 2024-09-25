import React, { useEffect, useState } from 'react';
import { User, Star } from 'lucide-react';
import { ElfsightWidget } from 'react-elfsight-widget';
import './Testimonials.css'

const TestimonialCard = ({ name, text, rating }) => (
  <div className="testimonial-card">
    <div className="testimonial-header">
      <User className="user-icon" />
      <h3 className="testimonial-name">{name}</h3>
    </div>
    <div className="testimonial-rating">
      {[...Array(5)].map((_, i) => (
        <Star key={i} fill={i < rating ? "#FFD700" : "none"} stroke="#FFD700" />
      ))}
    </div>
    <p className="testimonial-text">{text}</p>
  </div>
);

const Testimonials = () => {
  useEffect(() => {
    // Load Elfsight platform script
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='testimonials-main'>
      <h1>TESTIMONIALS</h1>
      <p>Read what people have to say:</p>
      <div className="testimonials-grid">
        <div className="elfsight-app-779cf169-1971-4ab4-90a7-57d4028f43a4" data-elfsight-app-lazy></div>
      </div>
    </div>
  );
};

export default Testimonials;
