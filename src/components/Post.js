import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default Post;
