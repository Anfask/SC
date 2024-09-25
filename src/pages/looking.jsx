import React from "react";
import { useNavigate } from "react-router-dom"; 
import './looking.css';

const Looking = () => {
    const navigate = useNavigate(); 

    const handleContactRedirect = () => {
        navigate('/contact'); 
    };

    return (
        <div className="looking-div">
            <h2>ARE YOU LOOKING FOR <span className="lookspan">STUDENT VISA ?</span>   JUST CALL US</h2>
            <button onClick={handleContactRedirect} className="Contactus-btn">CONTACT US</button>
        </div>
    );
};

export default Looking;
