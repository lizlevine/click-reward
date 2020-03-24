import React from "react";
import "./style.css";

// const styles = {
//   alignItems: "center",
//   display: "flex",
//   justifyContent: "center"
// };

function Flex(props) {
  return <div className="flex">{props.children}</div>;
}

export default Flex;
