// src/components/Post.js
import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="post">
      <img src={post.imageUrl} alt="Post" style={{ width: '100%', height: 'auto' }} />
      <h3>{post.title}</h3>
      <p>{post.date}</p>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
