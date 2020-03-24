import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="jumbo">
        <h1 className="display-4">Clicker Training Game</h1>
        <p className="lead">
          The clicker method of training is a tried, true and fun method of teaching your dog
          good social behavior. Click on any dog to begin. <br>
          </br>
          (But each dog only gets one click|reward per game!)
        </p>
      </div>
    </div>
  );
}

export default Jumbotron;
