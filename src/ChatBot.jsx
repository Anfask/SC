import React, { useState } from 'react';
import './ChatBot.css';  
import chatIcon from './assets/robo.png'; 
import closeIcon from './assets/close.png'; 
import Anna from './assets/Anna.png'; 
import James from './assets/James.png'; 
const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle chat options visibility
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">
      {/* Chatbot Icon */}
      <div className="chatbot-icon" onClick={toggleChat}>
        <img src={isOpen ? closeIcon : chatIcon} alt="Chatbot" className="chatbot-image" />
      </div>

      {/* Chat Options */}
      {isOpen && (
        <div className="chat-options">
          <div className="chat-header">
            <h3>Need Help? Chat with us</h3>
            <p>Click one of our representatives below</p>
          </div>
          <div className="contact-option">
            <img src={Anna} alt="Anna" className="rep-image" />
            <div className="rep-details">
              <h4>Anna</h4>
              <p>Education Consultant</p>
            </div>
            <a
              href="https://wa.me/+919995878088"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-icon"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
          <div className="contact-option">
            <img src={James} alt="James" className="rep-image" />
            <div className="rep-details">
              <h4>James</h4>
              <p>Sale Support</p>
            </div>
            <a
              href="https://wa.me/+919995878088"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-icon"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
