import React from "react";
import "./style.css";

const styles = {
  alignItems: "center",
  display: "flex",
  justifyContent: "center"
};

function Flex(props) {
  return <div style={styles}>{props.children}</div>;
}

export default Flex;