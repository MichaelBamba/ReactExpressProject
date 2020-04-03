import React, { Component } from "react";

const Home = (props) => {
  return (
    <div>
      <p>Hello and welcome to the blog of a man trapped during a pandemic</p>
      <p>
        {" "}
        besure to leave a comment and help everybody get through this cabin
        fever
      </p>
      <a href="http://localhost:3001/blogpost"> See our posts</a>
    </div>
  );
};

export default Home;
