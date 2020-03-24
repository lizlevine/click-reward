import React from "react";
import "./style.css";

function ImgCard() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://via.placeholder.com/150"
        class="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Beagle learning to sit</h5>
        <p className="card-text">
          This compact scent hound is driven by smell and often difficult to
          train.
        </p>
        <div class="button">
          <a href="#test" className="btn btn-primary">
            click | reward
          </a>
        </div>
      </div>
    </div>
  );
}

export default ImgCard;

// function ImgCard(props) {
//   return (
//     <div className="card">
//       <img
//         src={props.src}
//         className="card-img-top"
//         alt={props.altTxt}
//         imgid={props.id}
//         onClick={() => props.handleGuess(props.id)}
//       />
//     </div>
//   );
// }

// export default ImgCard;
