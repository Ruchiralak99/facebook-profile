// src/components/Tabs.js
import React from 'react';
import './Tabs.css';

const Tabs = () => {
  return (
    <div className="tabs">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" href="#">Posts</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Mentions</a>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
