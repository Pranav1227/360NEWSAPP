import "./App.css";
import React, { Component } from "react";
import NavBar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default class App extends Component {
  pageSize = 6;
  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    const categories = [
      "business",
      "entertainment",
      "home",
      "health",
      "science",
      "sports",
      "technology",
    ];

    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="general"
                  pageSize={this.pageSize}
                  country="us"
                  category="general"
                />
              }
            />
            {categories.map((category) => (
              <Route
                path={`/${category}`}
                element={
                  <News
                    setProgress={this.setProgress}
                    apiKey={this.apiKey}
                    key={category}
                    pageSize={this.pageSize}
                    country="us"
                    category={category}
                  />
                }
                key={category}
              />
            ))}
          </Routes>
        </Router>
      </div>
    );
  }
}
