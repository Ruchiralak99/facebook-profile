// src/components/Post.js
import React from 'react';
import './Post.css'; // Ensure this path is correct

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post-header">
        {post.profilePicUrl && (
          <img src={post.profilePicUrl} alt="Profile" className="profile-pic" />
        )}
        <div className="post-title-date">
          <h3>{post.title}</h3>
          <p>{post.date}</p>
        </div>
      </div>
      <p>{post.content}</p>
      {post.imageUrl && (
        <img src={post.imageUrl} alt="Post" className="post-image" />
      )}
    </div>
  );
};

export default Post;
