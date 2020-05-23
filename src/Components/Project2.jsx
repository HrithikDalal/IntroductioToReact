import React from "react";
import pi, {
  doublePi,
  triplePi,
  add,
  multiply,
  subtract,
  divide
} from "./mathss.js";

function Project2() {
  return (
    <ul>
      <li>Pi = {pi}</li>
      <li>Pi * 2 = {doublePi()}</li>
      <li>Pi * 3 = {triplePi()}</li>
      <li>2 + 3 = {add(2, 3)}</li>
      <li>3 * 4 = {multiply(3, 4)}</li>
      <li>5 - 2 = {subtract(5, 2)}</li>
      <li>5 / 2 = {divide(5, 2)}</li>
    </ul>
  );
}

export default Project2;
