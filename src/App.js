import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router basename="/employee-directory">
      <div className="App">
        <Header />
        {/* <SearchForm /> */}
        <Wrapper />
      </div>
    </Router>
  );
}

export default App;
