import React from "react";
import "./style.css";

function ImgCard(props) {
  console.log(props);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.src} className="card-img-top" alt={props.altTxt} />
      <div className="card-body">
        <p className="card-text"></p>
        <div className="button" onClick={props.handleClick}>
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
