import React from 'react';
import './Tabs.css'; // Ensure Tabs.css is in the same directory

const Tabs = ({ activeTab, onTabClick }) => {
  return (
    <nav className="tabs-navbar">
      <ul className="tabs-nav">
        <li
          className={activeTab === 'posts' ? 'active' : ''}
          onClick={() => onTabClick('posts')}
        >
          Posts
        </li>
        <li
          className={activeTab === 'about' ? 'active' : ''}
          onClick={() => onTabClick('about')}
        >
          About
        </li>
        <li
          className={activeTab === 'mentions' ? 'active' : ''}
          onClick={() => onTabClick('mentions')}
        >
          Mentions
        </li>
        <li
          className={activeTab === 'reviews' ? 'active' : ''}
          onClick={() => onTabClick('reviews')}
        >
          Reviews
        </li>
        <li
          className={activeTab === 'followers' ? 'active' : ''}
          onClick={() => onTabClick('followers')}
        >
          Followers
        </li>
      </ul>
    </nav>
  );
};

export default Tabs;
