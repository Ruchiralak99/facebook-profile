// src/components/Post.js
import React from 'react';
import './Post.css';

const Post = ({ post }) => {
  return (
    <div className="post">
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
