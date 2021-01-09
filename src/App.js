import React from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Wrapper />
    </div>
  );
}

export default App;
