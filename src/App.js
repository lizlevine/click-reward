// all components get imported into this file - wraps it all together

import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Jumbotron from "./components/Jumbotron/Jumbotron";
// import GameContainer from "./components/GameContainer/GameContainer";
import ImgCard from "./components/ImgCard/ImgCard";
import Flex from "./components/Flex/Flex";
// import allImages from "./components/ImgCard/imageDetails";
// import imageDetails from "./components/ImgCard/imageDetails";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Jumbotron />
      {/* <GameContainer /> */}
      {/* <allImages /> */}
      <Flex>
        <ImgCard />
        <ImgCard />
        <ImgCard />
        <ImgCard />
        <ImgCard />
        <ImgCard />
        <ImgCard />
        <ImgCard />
        <ImgCard />
        <ImgCard />
        <ImgCard />
        <ImgCard />
        {/* <allImages /> */}
      </Flex>
      <Flex />

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
