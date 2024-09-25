import React from 'react';
import './study-destinations.css';
import Looking from './looking'

// Import local images
import usaImage from '../assets/USA.png';
import australiaImage from '../assets/AUS.jpg';
import ukImage from '../assets/UK.jpg';
import germanyImage from '../assets/GER.jpg';
import canadaImage from '../assets/CAN.jpg';
import irelandImage from '../assets/IER.jpg';
import dubaiImage from '../assets/DUBAI.jpg';
import singaporeImage from '../assets/SIG.avif';
import switzerlandImage from '../assets/SWI.jpg';
import newZealandImage from '../assets/NEW.jpeg'; 
import MaltaImg from '../assets/MAL.jpg';
import franceImage from '../assets/FRA.jpg'; 
import SpainImg from '../assets/SPA.jpeg';
import malaysiaImage from '../assets/MALA.jpg';  
import sriLankaImage from '../assets/SRI.jpg';  

const countries = [
    { name: "USA", flag: "🇺🇸", image: usaImage },
    { name: "Australia", flag: "🇦🇺", image: australiaImage },
    { name: "UK", flag: "🇬🇧", image: ukImage },
    { name: "Germany", flag: "🇩🇪", image: germanyImage },
    { name: "Canada", flag: "🇨🇦", image: canadaImage },
    { name: "Ireland", flag: "🇮🇪", image: irelandImage },
    { name: "Dubai", flag: "🇦🇪", image: dubaiImage },
    { name: "Singapore", flag: "🇸🇬", image: singaporeImage },
    { name: "Switzerland", flag: "🇨🇭", image: switzerlandImage },
    { name: "New Zealand", flag: "🇳🇿", image: newZealandImage },
    { name: "Malta", flag: "🇲🇹", image: MaltaImg },  
    { name: "France", flag: "🇫🇷", image: franceImage },
    { name: "Spain", flag: "🇪🇸", image: SpainImg },  
    { name: "Malaysia", flag: "🇲🇾", image: malaysiaImage },
    { name: "Sri Lanka", flag: "🇱🇰", image: sriLankaImage },
];

const Study = () => {
    return (
        <div className='dest-main'>
            <div className="dest-header">
                <h1>STUDY DESTINATIONS</h1>
                <p>For Your Studies, Choose Your Country</p>
            </div>
            <div className="countries-grid">
                {countries.map((country, index) => (
                    <div key={index} className="country-box">
                        <img src={country.image} alt={`${country.name}`} className="country-image" />
                        <div className="country-info">
                            <span className="country-flag">{country.flag}</span>
                            <h3 className="country-name">{country.name}</h3>
                            <button className="explore-btn">
                                Explore More 
                                <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='lok-section'>
                <Looking/>
            </div>
        </div>
    );
};

export default Study;
