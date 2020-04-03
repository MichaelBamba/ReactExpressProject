import React from "react";
import BlogPost from "./blogpost";

const BlogPostList = (props) => {
  const { blogposts } = props;
  console.log(props);
  return (
    <div className="PostList">
      {blogposts.map((post, id) => (
        <BlogPost post={post} key={id} />
      ))}
    </div>
  );
};

export default BlogPostList;
