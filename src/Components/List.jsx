import React from "react";

const num = 7;

function List() {
  return (
    <ul>
      <li>Item {num}</li>
      <li>Item {3 + 40}</li>
      <li>Item {Math.floor(Math.random() * 10)}</li>
    </ul>
  );
}

export default List;
