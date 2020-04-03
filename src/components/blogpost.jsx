import React, { Component } from "react";

class BlogPost extends Component {
  state = {
    blogposts: {},
  };

  async componentDidMount() {
    const post = await this.loadData();
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
      <div>
        <h2>{blogposts.author}</h2>
        <p>{blogposts.content}</p>
      </div>
    );
  }
}

export default BlogPost;
