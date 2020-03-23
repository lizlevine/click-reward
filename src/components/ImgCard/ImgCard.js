import React from "react";
import "./style.css";

function ImgCard() {
  return (
    <div class="card" style={{ width: "18rem" }}>
    <img
      src="https://via.placeholder.com/150"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">Beagle learning to sit</h5>
      <p class="card-text">
        This compact scent hound is driven by smell and often difficult to train.
      </p>
      <a href="#test" class="btn btn-primary">
        click | reward
      </a>
    </div>
  </div>
  );
}

export default ImgCard;
