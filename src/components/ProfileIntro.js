// src/components/ProfileIntro.js
import React from 'react';
import './ProfileIntro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faThumbsUp, faSearch } from '@fortawesome/free-brands-svg-icons';

const ProfileIntro = () => {
    return (
        <div className="profile-intro">
            <div 
                className="cover-photo" 
                style={{ 
                    backgroundImage: 'url(/images/cover-photo.jpg)' 
                }}
            >
                {/* Optional: Cover photo overlay or additional content */}
            </div>
            <div className="profile-details">
                <div 
                    className="profile-picture" 
                    style={{ 
                        backgroundImage: 'url(/images/profile-picture.png)'
                    }}
                >
                    {/* Optional: Profile picture overlay or additional content */}
                </div>
                <div className="intro-text">
                    <h1>Softmint Software Solutions</h1>
                    <p>2.4K likes • 2.4K followers</p>
                </div>
                <div className="social-buttons">
                    <button className="social-button">
                        <FontAwesomeIcon icon={faWhatsapp} />
                        <span>WhatsApp</span>
                    </button>
                    <button className="social-button">
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <span>Like</span>
                    </button>
                    <button className="social-button">
                        <FontAwesomeIcon icon={faSearch} />
                        <span>Search</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileIntro;
