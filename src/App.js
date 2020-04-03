import React from "react";
import Home from "./components/homepage";
import BlogPostList from "./components/blogpostList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/blogpost" component={BlogPostList} />
      </Router>
    </div>
  );
}

export default App;
