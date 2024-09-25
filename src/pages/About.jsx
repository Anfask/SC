import React from 'react';
import './About.css'
import Ribbon from '../components/MovingRibbon';
import Reviews from '../components/review';

const About = () => {
    return (
        <div className="Abt-main">
            <div className='Abt-header'>
               <h1>ABOUT US</h1>
               <p>Lorem ipsum dolor sit amet consectetur,</p>
            </div>
            <div className="Abt-container">
            <div className="Abt-box yellow-box">
               <h2>OUR STORY</h2>
               <p>Mrs. Sabitha B Nair, is the Founder and CEO of S’Chambers Overseas Education Consultants, Calicut. She completed her MBA in HR and Marketing from Symbiosis, Bangalore, and has been in the Education industry for the past 18 years specializing in Overseas Education counseling and career guidance. She is the authorized representative of various renowned Public Universities from the UK, Australia, USA, Canada, etc. Born and brought up in Kerala Mrs. Sabitha moved to Delhi in 2005, where she started working in the Overseas Education Industry. She worked with the Chopras from 2007 to 2017. During this tenure, she became a member of their National Core Team. Working in different cities imbued her with robust familiarity with overall education sectors and scenarios for higher education abroad. The 18 years of experience in the field also gave her rich experience where she learned about different education markets and the student's interests. Before deciding to resign, Mrs. Sabitha was the Team Leader in Relationships in the Cochin branch of the Chopra group. </p>
            </div>
            <div className="Abt-box light-pink-box">
                <h2>OUR MISSION</h2>
                <p>To be the best “student’s chambers” to drive the whole world through successful overseas destinations for our students.</p>
            </div>
            <div className="Abt-box purple-box">
                <h2>OUR VISION</h2>
                <p>To honour our promises and commitments with clients and build the best portfolio of students, universities and colleges.</p>
            </div>
            </div>
            <div className='ribbon'>
                <Ribbon/>
            </div>
            <div className='rewi'>
                <Reviews/>
            </div>
        </div>
    );
};

export default About;
