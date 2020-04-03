import React, { Component } from "react";
import BlogPost from "./blogpost";

class BlogPostList extends Component {
  state = {
    blogposts: [],
  };

  async componentDidMount() {
    const post = await this.loadData("http://localhost:3000/post");
    console.log(post);
    this.setState({
      blogposts: post,
    });
  }

  loadData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  render() {
    const { blogposts } = this.state;
    return (
      <div className="PostList">
        {blogposts.map((post, id) => (
          <BlogPost post={post} key={id} />
        ))}
      </div>
    );
  }
}

export default BlogPostList;
