import React from "react";
import "./style.css";

function NavBar(props) {
  return (
    <div className="sticky">
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Click | Reward
        </a>
        <div>
          <span className="score">Your Points: {props.yourPoints}</span>
          <span className="high-score">High Score: {props.highScore}</span>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
