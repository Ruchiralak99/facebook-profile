// src/App.js
import React from 'react';
import Header from './components/Header';
import ProfileIntro from './components/ProfileIntro';
import Tabs from './components/Tabs';
import PostList from './components/PostList';

const App = () => {
  const posts = [
    { id: 1, content: 'Post 1 content' },
    { id: 2, content: 'Post 2 content' },
  ];

  return (
    <div>
      <Header />
      <ProfileIntro />
      <Tabs />
      <PostList posts={posts} />
    </div>
  );
};

export default App;
