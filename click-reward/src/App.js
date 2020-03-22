// all components get imported into this file - houses everything

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Jumbotron from "./components/Jumbotron/Jumbotron";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Jumbotron />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Footer />
    </div>
  );
}

export default App;
