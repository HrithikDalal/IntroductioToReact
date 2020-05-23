import React from "react";
import Pi, { doublePi, triplePi } from "./mathss";

function Project2() {
  return (
    <ul>
      <li>{Pi}</li>
      <li>{doublePi()}</li>
      <li>{triplePi()}</li>
    </ul>
  );
}

export default Project2;
