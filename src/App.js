// src/App.js
import React from 'react';
import Header from './components/Header';
import ProfileIntro from './components/ProfileIntro';
import Tabs from './components/Tabs';
import PostList from './components/PostList';
import './App.css';

const App = () => {
  const posts = [
    {
      id: 1,
      title: 'Softmint Software Solutions',
      date: 'September 5, 2023',
      content: 'ඔබ සැමට පින්බර වෙසක් මංගල්‍යයක් වේවා! #vesak #poyaday',
      imageUrl: '/images/img.jpg', 
      profilePicUrl: '/images/profile-picture.png', 
    {
      id: 2,
      title: 'Post 2',
      date: 'September 6, 2023',
      content: 'Post 2 content',
      imageUrl: '/images/img2.jpg', 
      profilePicUrl: '/images/profile-picture.png', 
    },
  ];

  return (
    <div className="app-container">
      <Header />
      <ProfileIntro />
      <Tabs />
      <div className="content-container">
        <div className="left-section">
          <div className="about-section">
            <h2>About SoftMint</h2>
            <p>We are a boutique digital transformation consultancy and software development company that provides cutting-edge solutions to help businesses thrive in the digital age.</p>
            <p><strong>Address:</strong> No 310/1/1, Kaduwela Road, Koswatte Junction, Battaramulla, Sri Lanka</p>
            <p><strong>Phone:</strong> 077 726 1026</p>
            <p><strong>Email:</strong> hello@softmint.net</p>
            <p><strong>Website:</strong> softmint.net</p>
            <p><strong>Opening Hours:</strong> Always open</p>
            <p><strong>Rating:</strong> Not yet rated (1 Review)</p>
          </div>
        </div>
        <div className="right-section">
          <PostList posts={posts} />
        </div>
      </div>
    </div>
  );
};

export default App;
