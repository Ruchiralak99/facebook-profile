// src/components/ProfileIntro.js
import React from 'react';
import './ProfileIntro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faThumbsUp, faSearch } from '@fortawesome/free-solid-svg-icons';

const ProfileIntro = () => {
    return (
        <div className="profile-intro">
            <div 
                className="cover-photo" 
                style={{ 
                    backgroundImage: 'url(/images/cover-photo.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                {/* Optionally add a gradient overlay or text here */}
            </div>
            <div className="profile-details">
                <div 
                    className="profile-picture" 
                    style={{ 
                        backgroundImage: 'url(/images/profile-picture.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    {/* Optionally add profile picture details or overlay here */}
                </div>
                <div className="intro-text">
                    <h1>Softmint Software Solutions</h1>
                    <p>2.4K likes • 2.4K followers</p>
                </div>
                <div className="action-buttons">
                    <button className="action-button" aria-label="Contact via WhatsApp">
                        
                        <span>WhatsApp</span>
                    </button>
                    <button className="action-button" aria-label="Like this page">
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <span>Like</span>
                    </button>
                    <button className="action-button" aria-label="Search">
                        <FontAwesomeIcon icon={faSearch} />
                        <span>Search</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileIntro;
