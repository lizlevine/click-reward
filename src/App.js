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
      clickedIds: [],
      cardsArray: imageDetails.allImages
    };
  }
  // this function will update the state in the parent "App"
  handleClick(id) {
    console.log(this.state.clickedIds);
    console.log(id);
    // can use if else to see if user pressed same one twice
    if (this.state.clickedIds.includes(id)) {
      this.gameOver();
    }
    this.setState({ yourPoints: this.state.yourPoints + 1 });
    // this will pull everything in the array- the clicked pics and add them all into a new array
    this.setState({ clickedIds: [...this.state.clickedIds, id] });
    let newDeck = this.shuffleCards(this.state.cardsArray);
    this.setState({ cardsArray: newDeck });
  }

  // reset yourPoints to "0" alert user, chose twice, reset clicked id's
  gameOver() {
    this.setState({ yourPoints: 0 });
    // alert("sorry, you rewarded twice, start new game!");
    this.setState({ clickedIds: [] });
  }

  // need array param as placeholder
  shuffleCards(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
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

          {/*   // randomize the images array with sort method */}
          {/* handle whether user selected the same dog twice */}
          {/* keep track of how many games won, "highest score" */}
          {/* if user selects same dog, reset game to 0, do not add to high score*/}
        </Flex>
        <Flex />

        <Footer />
      </div>
    );
  }
}

export default App;
