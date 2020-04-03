import React, { Component } from "react";

const BlogPost = (props) => {
  const { blogposts } = props;

  return (
    <div>
      <p>{blogposts.author}</p>
      <p> {blogposts.post} </p>
    </div>
  );
};

export default BlogPost;
