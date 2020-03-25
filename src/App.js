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
import imageDetails from "./components/ImgCard/imageDetails";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      yourPoints: 0,
      highScore: 0,
      clickedIds: []
    };
  }
  // this function will update the state in the parent "App"
  handleClick(id) {
    this.setState({ yourPoints: this.state.yourPoints + 1 });
    // this will pull everything in the array- the clicked pics and add them all into a new array
    this.setState({ clickedIds: [...this.state.clickedIds, id] });
  }

  render() {
    return (
      <div className="App">
        <NavBar
          yourPoints={this.state.yourPoints}
          highScore={this.state.highScore}
        />
        <Jumbotron />
        {/* <GameContainer /> */}
        {/* <allImages /> */}
        <Flex>
          {imageDetails.allImages.map(img => {
            return (
              <ImgCard
                altTxt={img.altTxt}
                id={img.id}
                src={img.image}
                key={img.id}
                handleClick={() => this.handleClick()}
              />
            );
          })}
        </Flex>
        <Flex />

        <Footer />
      </div>
    );
  }
}

export default App;
