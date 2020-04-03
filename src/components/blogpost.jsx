import React, { Component } from "react";

class BlogPost extends Component {
  state = {
    post: {},
  };

  async componentDidMount() {
    const post = await this.loadData();
    this.setState({
      post,
    });
  }

  loadData = async () => {
    const url = `http://localhost:3000/post`;
    const response = await fetch(url);
    const data = response.json();
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
